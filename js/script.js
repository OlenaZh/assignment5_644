window.document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => {
        return document.getElementById(id);
    };

    $('empForm').addEventListener('submit', (e) => {
        e.preventDefault();

        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let ext = document.getElementById('ext').value;
        let email = document.getElementById('email').value;
        let department = document.getElementById('department').value;

        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Extension: ${ext}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`);
});
});