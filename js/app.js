/*
	* Funcionalidad de tu producto
	*/

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/*    SELECCION DE UL    */
var sedes = document.getElementById('sedesOpcs');
var overview = document.getElementById('over');
var students = document.getElementById('stu');
var teachers = document.getElementById('teach');
var overviewCont = document.getElementById('overview');
var studentsCont = document.getElementById('students');
var teachersCont = document.getElementById('teachers');

window.onload = function() {
			studentsCont.classList.add('hide');
	teachersCont.classList.add('hide');
	overviewCont.classList.remove('hide');
};
overview.addEventListener('click', function(){
	studentsCont.classList.add('hide');
	teachersCont.classList.add('hide');
	overviewCont.classList.remove('hide');
})
students.addEventListener('click', function(){
	overviewCont.classList.add('hide');
	teachersCont.classList.add('hide');
	studentsCont.classList.remove('hide');
})
teachers.addEventListener('click', function(){
	overviewCont.classList.add('hide');
	studentsCont.classList.add('hide');
	teachersCont.classList.remove('hide');
})

// selector
var menu = document.querySelector('.hamburger');

/* MENU USER */
// method
function toggleMenu(event) {
	this.classList.toggle('is-active');
	document.querySelector(".menuUser").classList.toggle("is_active");
	event.preventDefault();
}
// event
menu.addEventListener('click', toggleMenu, false);

// grafico de alumnas activa por sede y generacion(arequipa 2016-2)

var aqp20162 = document.getElementById('aqp20162');
aqp20162.addEventListener('click', function() {

	var promedio = document.getElementById('promedio');
	var contadorTrue = 0;
	var contadorFalse = 0;

	for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
		console.log(data.AQP['2016-2'].students[i].active);
		if (data.AQP['2016-2'].students[i].active == true) {
			contadorTrue++;
		} else if (data.AQP['2016-2'].students[i].active == false) {
			contadorFalse++;
		}
		var totalContador = contadorTrue + contadorFalse;
	}
	promedio.innerHTML = totalContador;
	console.log(contadorTrue);
	console.log(contadorFalse);
	console.log(totalContador);

	var porcentajeDesercionAqpPrimeraGeneracion = (contadorFalse * 100)
			/ totalContador;
	var porcentajeDesercionAqpPrimeraGeneracionFinal = Math
			.round(porcentajeDesercionAqpPrimeraGeneracion)
			+ '%';
	console.log(porcentajeDesercionAqpPrimeraGeneracionFinal);

})

// grafico de alumnas activa por sede y generacion(arequipa 2017-1)
var promedio = document.getElementById('promedio');
var contadorTrueDos = 0;
var contadorFalseDos = 0;

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	console.log(data.AQP['2017-1'].students[i].active);
	if (data.AQP['2017-1'].students[i].active == true) {
		contadorTrueDos++;
	} else if (data.AQP['2017-1'].students[i].active == false) {
		contadorFalseDos++;
	}
	var totalContadorDos = contadorTrueDos + contadorFalseDos;
}

/*console.log(contadorTrue);
console.log(contadorFalse);
console.log(totalContador);
console.log(totalContadorDos);*/

var porcentajeDesercionAqpSegundaGeneracion = (contadorFalseDos * 100)
		/ totalContadorDos;
var porcentajeDesercionAqpSegundaGeneracionFinal = Math
		.round(porcentajeDesercionAqpSegundaGeneracion)
		+ '%';
console.log(porcentajeDesercionAqpSegundaGeneracionFinal);

// grafico de alumnas activa por sede y generacion(CDMX 2017-1)
var promedio = document.getElementById('promedio');
var contadorTrueCdmx = 0;
var contadorFalseCdmx = 0;

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	console.log(data.CDMX['2017-1'].students[i].active);
	if (data.CDMX['2017-1'].students[i].active == true) {
		contadorTrueCdmx++;
	} else if (data.CDMX['2017-1'].students[i].active == false) {
		contadorFalseCdmx++;
	}
	var totalContadorCdmx = contadorTrueCdmx + contadorFalseCdmx;
}
/*console.log(contadorTrueCdmx);
console.log(contadorFalseCdmx);
console.log(totalContadorCdmx);*/

var porcentajeDesercionCdmxPrimeraGeneracion = (contadorFalseCdmx * 100)
		/ totalContadorCdmx;
var porcentajeDesercionCdmxPrimeraGeneracionFinal = Math
		.round(porcentajeDesercionCdmxPrimeraGeneracion)
		+ '%';
console.log(porcentajeDesercionCdmxPrimeraGeneracionFinal);

// grafico de alumnas activa por sede y generacion(CDMX 2017-2)

var promedio = document.getElementById('promedio');
var contadorTrueCdmxDos = 0;
var contadorFalseCdmxDos = 0;

for (var i = 0; i < data.CDMX['2017-2'].students.length; i++) {
	console.log(data.CDMX['2017-2'].students[i].active);
	if (data.CDMX['2017-2'].students[i].active == true) {
		contadorTrueCdmxDos++;
	} else if (data.CDMX['2017-2'].students[i].active == false) {
		contadorFalseCdmxDos++;
	}
	var totalContadorCdmxDos = contadorTrueCdmxDos + contadorFalseCdmxDos;
}
console.log(contadorTrueCdmxDos);
console.log(contadorFalseCdmxDos);
console.log(totalContadorCdmxDos);

var porcentajeDesercionCdmxSegundaGeneracion = (contadorFalseCdmxDos * 100)
		/ totalContadorCdmxDos;
var porcentajeDesercionCdmxSegundaGeneracionFinal = Math
		.round(porcentajeDesercionCdmxSegundaGeneracion)
		+ '%';
console.log(porcentajeDesercionCdmxSegundaGeneracionFinal);

// grafico de alumnas activa por sede y generacion(LIMA 2016-2)

var promedio = document.getElementById('promedio');
var contadorTrueLimaUno = 0;
var contadorFalseLimaUno = 0;

for (var i = 0; i < data.LIM['2016-2'].students.length; i++) {
	console.log(data.LIM['2016-2'].students[i].active);
	if (data.LIM['2016-2'].students[i].active == true) {
		contadorTrueLimaUno++;
	} else if (data.LIM['2016-2'].students[i].active == false) {
		contadorFalseLimaUno++;
	}
	var totalContadorLimaUno = contadorTrueLimaUno + contadorFalseLimaUno;
}
console.log(contadorTrueLimaUno);
console.log(contadorFalseLimaUno);
console.log(totalContadorLimaUno);

var porcentajeDesercionLimPrimeraGeneracion = (contadorFalseLimaUno * 100)
		/ totalContadorLimaUno;
var porcentajeDesercionLimPrimeraGeneracionFinal = Math
		.round(porcentajeDesercionLimPrimeraGeneracion)
		+ '%';
console.log(porcentajeDesercionLimPrimeraGeneracionFinal);

// grafico de alumnas activa por sede y generacion(LIMA 2017-1 )

var promedio = document.getElementById('promedio');
var contadorTrueLimaDos = 0;
var contadorFalseLimaDos = 0;

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	console.log(data.LIM['2017-1'].students[i].active);
	if (data.LIM['2017-1'].students[i].active == true) {
		contadorTrueLimaDos++;
	} else if (data.LIM['2017-1'].students[i].active == false) {
		contadorFalseLimaDos++;
	}
	var totalContadorLimaDos = contadorTrueLimaDos + contadorFalseLimaDos;
}
console.log(contadorTrueLimaDos);
console.log(contadorFalseLimaDos);
console.log(totalContadorLimaDos);

var porcentajeDesercionLimSegundaGeneracion = (contadorFalseLimaDos * 100)
		/ totalContadorLimaDos;
var porcentajeDesercionLimSegundaGeneracionFinal = Math
		.round(porcentajeDesercionLimSegundaGeneracion)
		+ '%';
console.log(porcentajeDesercionLimSegundaGeneracionFinal);

// grafico de alumnas activa por sede y generacion(LIMA 2017-2 )

var promedio = document.getElementById('promedio');
var contadorTrueLimaTres = 0;
var contadorFalseLimaTres = 0;

for (var i = 0; i < data.LIM['2017-2'].students.length; i++) {
	console.log(data.LIM['2017-2'].students[i].active);
	if (data.LIM['2017-2'].students[i].active == true) {
		contadorTrueLimaTres++;
	} else if (data.LIM['2017-2'].students[i].active == false) {
		contadorFalseLimaTres++;
	}
	var totalContadorLimaTres = contadorTrueLimaTres + contadorFalseLimaTres;
}
console.log(contadorTrueLimaTres);
console.log(contadorFalseLimaTres);
console.log(totalContadorLimaTres);

var porcentajeDesercionLimTerceraGeneracion = (contadorFalseLimaTres * 100)
		/ totalContadorLimaTres;
var porcentajeDesercionLimTerceraGeneracionFinal = Math
		.round(porcentajeDesercionLimTerceraGeneracion)
		+ '%';
console.log(porcentajeDesercionLimTerceraGeneracionFinal);

// grafico de alumnas activa por sede y generacion(SCL 2016-2 )

var promedio = document.getElementById('promedio');
var contadorTrueSclUno = 0;
var contadorFalseSclUno = 0;

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	console.log(data.SCL['2016-2'].students[i].active);
	if (data.SCL['2016-2'].students[i].active == true) {
		contadorTrueSclUno++;
	} else if (data.SCL['2016-2'].students[i].active == false) {
		contadorFalseSclUno++;
	}
	var totalContadorSclUno = contadorTrueSclUno + contadorFalseSclUno;
}
console.log(contadorTrueSclUno);
console.log(contadorFalseSclUno);
console.log(totalContadorSclUno);

var porcentajeDesercionSclPrimeraGeneracion = (contadorFalseSclUno * 100)
		/ totalContadorSclUno;
var porcentajeDesercionSclPrimeraGeneracionFinal = Math
		.round(porcentajeDesercionSclPrimeraGeneracion)
		+ '%';
console.log(porcentajeDesercionSclPrimeraGeneracionFinal);

// grafico de alumnas activa por sede y generacion(SCL 2017-1 )

var stgo20171 = document.getElementById('stgo20171');
stgo20171.addEventListener('click', function() {

	var promedio = document.getElementById('promedio');
	var contadorTrueSclDos = 0;
	var contadorFalseSclDos = 0;

	for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
		console.log(data.SCL['2017-1'].students[i].active);
		if (data.SCL['2017-1'].students[i].active == true) {
			contadorTrueSclDos++;
		} else if (data.SCL['2017-1'].students[i].active == false) {
			contadorFalseSclDos++;
		}
		var totalContadorSclDos = contadorTrueSclDos + contadorFalseSclDos;
	}
	promedio.innerHTML = totalContadorSclDos;
})

/*console.log(contadorTrueSclDos);
console.log(contadorFalseSclDos);
console.log(totalContadorSclDos);*/

var porcentajeDesercionSclSegundaGeneracion = (contadorFalseSclDos * 100)
		/ totalContadorSclDos;
var porcentajeDesercionSclSegundaGeneracionFinal = Math
		.round(porcentajeDesercionSclSegundaGeneracion)
		+ '%';
console.log(porcentajeDesercionSclSegundaGeneracionFinal);

// grafico de alumnas activa por sede y generacion(SCL 2017-2 )

var promedio = document.getElementById('promedio');
var contadorTrueSclTres = 0;
var contadorFalseSclTres = 0;

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	console.log(data.SCL['2017-2'].students[i].active);
	if (data.SCL['2017-2'].students[i].active == true) {
		contadorTrueSclTres++;
	} else if (data.SCL['2017-2'].students[i].active == false) {
		contadorFalseSclTres++;
	}
	var totalContadorSclTres = contadorTrueSclTres + contadorFalseSclTres;
}
console.log(contadorTrueSclTres);
console.log(contadorFalseSclTres);
console.log(totalContadorSclTres);

var porcentajeDesercionSclTerceraGeneracion = (contadorFalseSclTres * 100)
		/ totalContadorSclTres;
var porcentajeDesercionSclTerceraGeneracionFinal = Math
		.round(porcentajeDesercionSclTerceraGeneracion)
		+ '%';
console.log(porcentajeDesercionSclTerceraGeneracionFinal);
var totalAlumnasLab = totalAlumnasAqpPrimeraGeneracion
		+ totalAlumnasAqpSegundaGeneracion + totalAlumnasCdmxPrimeraGeneracion
		+ totalAlumnasCdmxSegundaGeneracion + totalAlumnasLimPrimeraGeneracion
		+ totalAlumnasLimSegundaGeneracion + totalAlumnasLimTerceraGeneracion
		+ totalAlumnasSclPrimeraGeneracion + totalAlumnasSclSegundaGeneracion
		+ totalAlumnasSclTerceraGeneracion;
console.log(totalAlumnasLab);

// intentando obtener el numero de alumnas con un promedio del 70%

var promedioSprint = document.getElementById('promedioSprint');
var contadorAlumnas = 0;

// alumnas de AQP 2016-2

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[1].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[2].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[3].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnas++
	}
}

// alumnas de AQP 2017-1

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	if (data.AQP['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.AQP['2017-1'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	if (data.AQP['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.AQP['2017-1'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	if (data.AQP['2017-1'].students[i].sprints[2].score.hse > 840
			&& data.AQP['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}

// alumnas de CDMX 2017-1

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	if (data.CDMX['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.CDMX['2017-1'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	if (data.CDMX['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.CDMX['2017-1'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	if (data.CDMX['2017-1'].students[i].sprints[2].score.hse > 840
			&& data.CDMX['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}

// LIM 2016-2

for (var i = 0; i < data.LIM['2016-2'].students.length; i++) {
	if (data.LIM['2016-2'].students[i].active == true
			&& data.LIM['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2016-2'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.LIM['2016-2'].students.length; i++) {
	if (data.LIM['2016-2'].students[i].active == true
			&& data.LIM['2016-2'].students[i].sprints[1].score.hse > 840
			&& data.LIM['2016-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

// LIM 2017-1

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2017-1'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.LIM['2017-1'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[2].score.hse > 840
			&& data.LIM['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[3].score.hse > 840
			&& data.LIM['2017-1'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnas++
	}
}

// LIM 2017-2

for (var i = 0; i < data.LIM['2017-2'].students.length; i++) {
	if (data.LIM['2017-2'].students[i].active == true
			&& data.LIM['2017-2'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2017-2'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.LIM['2017-2'].students.length; i++) {
	if (data.LIM['2017-2'].students[i].active == true
			&& data.LIM['2017-2'].students[i].sprints[1].score.hse > 840
			&& data.LIM['2017-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

// SCL 2016-2

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[1].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}
for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[2].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}
for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[3].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnas++
	}
}

// SCL 2017-1

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	if (data.SCL['2017-1'].students[i].active == true
			&& data.SCL['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2017-1'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	if (data.SCL['2017-1'].students[i].active == true
			&& data.SCL['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.SCL['2017-1'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	if (data.SCL['2017-1'].students[i].active == true
			&& data.SCL['2017-1'].students[i].sprints[2].score.hse > 840
			&& data.SCL['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnas++
	}
}

// SCL 2017-2

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	if (data.SCL['2017-2'].students[i].active == true
			&& data.SCL['2017-2'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2017-2'].students[i].sprints[0].score.tech > 1260) {
		contadorAlumnas++
	}
}

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	if (data.SCL['2017-2'].students[i].active == true
			&& data.SCL['2017-2'].students[i].sprints[1].score.hse > 840
			&& data.SCL['2017-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnas++
	}
}
console.log(contadorAlumnas);

// Porcentaje que representa el total de estudiantes que superan el 70% de todos
// los sprints.

var porcentajeSprint = (contadorAlumnas * 100) / totalAlumnasLab;
var porcentajeSprintFinal = Math.round(porcentajeSprint) + '%';
console.log(porcentajeSprintFinal);

/*
 * Net Promoter Score (NPS)
 */

// La cantidad y el porcentaje que representa el total de estudiantes que
// superan la meta de puntos técnicos en promedio y por sprint
var promedioMetaSprint = document.getElementById('promedioMetaSprint');
var contadorAlumnasMetaSprint = 0;

// alumnas de AQP 2016-2 y 2017-1

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[0].score.tech > 1260
			&& data.AQP['2016-2'].students[i].sprints[1].score.tech > 1260
			&& data.AQP['2016-2'].students[i].sprints[2].score.tech > 1260
			&& data.AQP['2016-2'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	if (data.AQP['2017-1'].students[i].sprints[0].score.tech > 1260
			&& data.AQP['2017-1'].students[i].sprints[1].score.tech > 1260
			&& data.AQP['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

// Alumnas de CDMX 2017-1 y 2017-2

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	if (data.CDMX['2017-1'].students[i].sprints[0].score.tech > 1260
			&& data.CDMX['2017-1'].students[i].sprints[1].score.tech > 1260
			&& data.CDMX['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.CDMX['2017-2'].students.length; i++) {
	if (data.CDMX['2017-2'].students[i].active == true
			&& data.CDMX['2017-2'].students[i].sprints[0].score.tech > 1260
			&& data.CDMX['2017-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

// Alumnas de LIM 2016-2 2017-1 y 2017-2

for (var i = 0; i < data.LIM['2016-2'].students.length; i++) {
	if (data.LIM['2016-2'].students[i].active == true
			&& data.LIM['2016-2'].students[i].sprints[0].score.tech > 1260
			&& data.LIM['2016-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[0].score.tech > 1260
			&& data.LIM['2017-1'].students[i].sprints[1].score.tech > 1260
			&& data.LIM['2017-1'].students[i].sprints[2].score.tech > 1260
			&& data.LIM['2017-1'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.LIM['2017-2'].students.length; i++) {
	if (data.LIM['2017-2'].students[i].active == true
			&& data.LIM['2017-2'].students[i].sprints[0].score.tech > 1260
			&& data.LIM['2017-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

// Alumnas de SCL 2016-2 2017-1 y 2017-2

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[0].score.tech > 1260
			&& data.SCL['2016-2'].students[i].sprints[1].score.tech > 1260
			&& data.SCL['2016-2'].students[i].sprints[2].score.tech > 1260
			&& data.SCL['2016-2'].students[i].sprints[3].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	if (data.SCL['2017-1'].students[i].active == true
			&& data.SCL['2017-1'].students[i].sprints[0].score.tech > 1260
			&& data.SCL['2017-1'].students[i].sprints[1].score.tech > 1260
			&& data.SCL['2017-1'].students[i].sprints[2].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	if (data.SCL['2017-2'].students[i].active == true
			&& data.SCL['2017-2'].students[i].sprints[0].score.tech > 1260
			&& data.SCL['2017-2'].students[i].sprints[1].score.tech > 1260) {
		contadorAlumnasMetaSprint++
	}
}
console.log(contadorAlumnasMetaSprint);

// Porcentaje que representa el total de estudiantes que superan el 70% de todos
// los sprints en tech.

var porcentajeSprintTech = (contadorAlumnasMetaSprint * 100) / totalAlumnasLab;
var porcentajeSprintTechFinal = Math.round(porcentajeSprintTech) + '%';

console.log(porcentajeSprintTechFinal);

// cantidad y porcentaje que representa el total de estudiantes que superan el
// 70% de todos los sprints en hse

var promedioMetaSprintHse = document.getElementById('promedioMetaSprint');
var contadorAlumnasMetaSprintHse = 0;

// alumnas de AQP 2016-2 y 2017-1

for (var i = 0; i < data.AQP['2016-2'].students.length; i++) {
	if (data.AQP['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[1].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[2].score.hse > 840
			&& data.AQP['2016-2'].students[i].sprints[3].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.AQP['2017-1'].students.length; i++) {
	if (data.AQP['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.AQP['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.AQP['2017-1'].students[i].sprints[2].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

// Alumnas de CDMX 2017-1 y 2017-2

for (var i = 0; i < data.CDMX['2017-1'].students.length; i++) {
	if (data.CDMX['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.CDMX['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.CDMX['2017-1'].students[i].sprints[2].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.CDMX['2017-2'].students.length; i++) {
	if (data.CDMX['2017-2'].students[i].active == true
			&& data.CDMX['2017-2'].students[i].sprints[0].score.hse > 840
			&& data.CDMX['2017-2'].students[i].sprints[1].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

// Alumnas de LIM 2016-2 2017-1 y 2017-2

for (var i = 0; i < data.LIM['2016-2'].students.length; i++) {
	if (data.LIM['2016-2'].students[i].active == true
			&& data.LIM['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2016-2'].students[i].sprints[1].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.LIM['2017-1'].students.length; i++) {
	if (data.LIM['2017-1'].students[i].active == true
			&& data.LIM['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2017-1'].students[i].sprints[1].score.tech > 840
			&& data.LIM['2017-1'].students[i].sprints[2].score.tech > 840
			&& data.LIM['2017-1'].students[i].sprints[3].score.tech > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.LIM['2017-2'].students.length; i++) {
	if (data.LIM['2017-2'].students[i].active == true
			&& data.LIM['2017-2'].students[i].sprints[0].score.hse > 840
			&& data.LIM['2017-2'].students[i].sprints[1].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

// Alumnas de SCL 2016-2 2017-1 y 2017-2

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	if (data.SCL['2016-2'].students[i].active == true
			&& data.SCL['2016-2'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[1].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[2].score.hse > 840
			&& data.SCL['2016-2'].students[i].sprints[3].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	if (data.SCL['2017-1'].students[i].active == true
			&& data.SCL['2017-1'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2017-1'].students[i].sprints[1].score.hse > 840
			&& data.SCL['2017-1'].students[i].sprints[2].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	if (data.SCL['2017-2'].students[i].active == true
			&& data.SCL['2017-2'].students[i].sprints[0].score.hse > 840
			&& data.SCL['2017-2'].students[i].sprints[1].score.hse > 840) {
		contadorAlumnasMetaSprintHse++
	}
}
console.log(contadorAlumnasMetaSprintHse);

// Porcentaje que representa el total de estudiantes que superan el 70% de todos
// los sprints en tech.

var porcentajeSprintHse = (contadorAlumnasMetaSprintHse * 100)
		/ totalAlumnasLab;
var porcentajeSprintHseFinal = Math.round(porcentajeSprintHse) + '%';

console.log(porcentajeSprintHseFinal);

// promedio de los profesores

var promedioProfesores = document.getElementById('promedioProfesores');
var contadorPromedioDeAlumnosAProfesores = 0;

// alumnas de AQP 2016-2 y 2017-1

var promedioProfesoresArqPrimeraGeneracion = 0;

for (var i = 0; i > data.Aqp['2016-1'].students.length; i++) {
}