document.addEventListener("DOMContentLoaded", () => {

    const addNoteBtn = document.getElementById("addNoteBtn");
    const showAllBtn = document.getElementById("showAllBtn");
    const modal = document.getElementById("addNoteModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const form = document.getElementById("noteForm");
    const notesContainer = document.getElementById("notesContainer");

    const colors = [
        "#fde68a", "#bfdbfe", "#fecaca",
        "#bbf7d0", "#e9d5ff", "#fed7aa"
    ];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    addNoteBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();
        if (!title || !content) return;

        const note = document.createElement("div");
        note.className = "note";
        note.style.backgroundColor = getRandomColor();

        note.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <div class="note-actions">
                <button class="hide-btn">Hide</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        note.querySelector(".hide-btn").addEventListener("click", () => {
            note.style.display = "none";
        });

        note.querySelector(".delete-btn").addEventListener("click", () => {
            note.remove();
        });

        notesContainer.appendChild(note);
        form.reset();
        modal.classList.add("hidden");
    });

    showAllBtn.addEventListener("click", () => {
        document.querySelectorAll(".note").forEach(note => {
            note.style.display = "block";
        });
    });
});
