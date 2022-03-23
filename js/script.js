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

        // NOT USING HELPER FUNCTION

        /*console.log(`ID: ${document.getElementById('id').value}`);
        console.log(`Name: ${document.getElementById('name').value}`);
        console.log(`Extension: ${document.getElementById('ext').value}`);
        console.log(`Email: ${document.getElementById('email').value}`);
        console.log(`Department: ${document.getElementById('department').value}`);*/

        // OR USE THE HELPER FUNCTION

      /*console.log(`ID: ${$('id').value}`);
        console.log(`Name: ${$('name').value}`);
        console.log(`Extension: ${$('ext').value}`);
        console.log(`Email: ${$('email').value}`);
        console.log(`Department: ${$('department').value}`);*/
});
});