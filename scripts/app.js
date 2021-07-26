iconToggle = false;

function checkOther() {
    let category = $(`#selCategory`).val();
    if (category == "Other"){
        $(`#otherCategory`).show();
    }else{$(`#otherCategory`).hide();
    }
}

function toggleForm() {

if ($(`#inputForm`).is(":hidden")){
            $(`#inputForm`).show();
    }else{
            $(`#inputForm`).hide();
}

}

function toggleImportant() {
    if (iconToggle) {
        $(`#icon-important`).removeClass(`fa-exclamation`).addClass(`fa-times`);
        iconToggle = false;
    }else{
        $(`#icon-important`).removeClass(`fa-times`).addClass(`fa-exclamation`);
        iconToggle = true;
    }      
}

function init() {
console.log(`Loaded JS`);



$(`#selCategory`).change(checkOther);
$(`#btn-toggle`).click(toggleForm);
$(`#icon-important`).click(toggleImportant);

$(`#otherCategory`).hide();
}

window.onload = init;

