deleteBtns = document.querySelectorAll(".delete_btn")
deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', async () => {
        console.log(deleteBtn.id)
        await fetch('http://localhost:5000/' + deleteBtn.id, {
            'method': 'DELETE'
            }).then(res => res.text())
            .then(res => console.log(res))
        })
    })
