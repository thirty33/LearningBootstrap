const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')




$form.submit(function (ev) {
	ev.preventDefault()

	const error = Math.random() > 0.5
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$formGroup.removeClass().addClass('form-group')
	$formControl.removeClass().addClass('form-control')


	$formGroup.addClass(error ? 'has-danger' : 'has-success')
	$formControl.addClass(error ? 'form-control-danger' : 'form-control-success')


	$formGroup.find('.form-control-feedback').remove()

	var el;
	if (error) {
		el = $('<div>', {html: 'ha occurrido un error'})
	} else {
		el = $('<div>', {html: 'te enviaremos todas las novedades'})
		
	}

	el.addClass('form-control-feedback')
	$formGroup.append(el)
})

function mostrarModal (){

	var storage = localStorage.noMostrarModal
	var noMostrarModal = (storage ===undefined)
	? false : JSON.parse(storage)

	if(!noMostrarModal) {

		$('#modalOferta').modal()
	}

	$('#btnNoRegistrar').click(function (ev) {
		localStorage.noMostrarModal = true
	})
}


const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function (ev){
	// no ejecutar href
	ev.preventDefault()  

	 const $i = $filtrosToggle.find('i.fa')
	 const $isDown = $i.hasClass('fa-chevron-down')
	 if ($isDown){
	 	$i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	 } else {
	 	$i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	 }



})

