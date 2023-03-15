// console.log("Hello world in script.js")

const title_el = document.getElementById('title')
title_el.innerHTML = api.title;


const title_value = document.getElementsByTagName('title')[0].innerHTML
const title_tag = document.getElementsByTagName('title')[0]
title_tag.innerHTML = title_value + " - electronJS - " + api.electron

const note_title_el = document.getElementById('noteTitle')
const note_content_el = document.getElementById('noteContent')
const note_submit_el = document.getElementById('submitNote')

note_submit_el.addEventListener('click', async () => {
    const title = note_title_el.value
    const content = note_content_el.value

    const res = await api.createNote({
        title,
        content
    })
    // console.log(res)
    // console.log(res.success)
    if (res.success == true) {
        $(document).ready(function () {
            let alert = `<div class="alert alert-success alert-dismissible fade show pt-3" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Your file is stored here ${res.filePath}.</p>
            <hr>
            <p class="mb-0">Let's make other notes.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`
            $('#container').html()
            $("#container").html(alert)
        })
    }
    else {
        $(document).ready(function () {
            let alert = `<div class="alert alert-danger alert-dismissible fade show pt-3" role="alert">
            <h4 class="alert-heading">Oops! Something went wrong!</h4>
            <p>Aww this suck! But do not worry you can try again!</p>
            <hr>
            <p class="mb-0">Make sure you have filled in all of your data before submitting.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`
            $('#container').html()
            $("#container").html(alert)
        })
    }

    note_title_el.value = ""
    note_content_el.value = ""
})