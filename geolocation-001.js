var oOpciones = {enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0};

function validarGeolocalizacion()
{
	if (navigator.geolocation)
	{
		alert("Tu navegador sí soporta los servicios de geolocalización.");
	}
	else
	{
		alert("Lo siento, tu navegador no soporta los servicios de geolocalización.");
	}
}

function abrirMapa()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getLocalizacion, controlarErrores, oOpciones);
	}
	else
	{
		alert("Lo siento, tu navegador no soporta los servicios de geolocalización.");
	}
}

function getLocalizacion(oPosicion)
{
	var lLongitud = oPosicion.coords.longitude;
	var lLatitud = oPosicion.coords.latitude;

	window.open(`https://www.openstreetmap.org/#map=5/${lLatitud}/${lLongitud}`);
}

function controlarErrores(oError)
{
	alert("Ocurrió un error al utilizar los servicios de geolocalización: " + oError.message);
}