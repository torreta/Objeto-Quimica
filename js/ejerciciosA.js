/*
Para que inicie la creacion
$(1).jQuizMe(2, 3);
1 donde se creara
2 json con el quiz
3 opciones

Para preguntas de multiples selecciones es:
multiList: [
	{
		ques: "Pregunta.",
		ans: "Respuesta",
		ansSel: ["Respuesta equivocada", "Respuesta equivocada"]
	}, "otra preunta"
]

*/
var quiz = {
	multiList: [
	{
		ques: "Una disolución que se ha obtenido disolviendo la máxima cantidad que sea posible de carbonato de calcio en un litro de agua, y sabiendo que la solubilidad de dicho compuesto es de 5.10 <sup>-9</sup>g/litro, podemos"
			+ " decir que se trata de una disolución:",
		ans: "Sólido líquido diluida y saturada.",
		ansSel: ["Líquido-líquido concentrada y saturada.", "Sólido-líquido concentrada y saturada.", "Sólido-líquido diluida y sobresaturada."]
	},{
		ques: "Como sabemos, el aire tiene normalmente una cierta cantidad de vapor de agua en su composición. Si tenemos un aire que contenga 2 g de vapor de agua por litro de aire, y si ésta no es la máxima cantidad posible de "
			+ "vapor de agua que puede contener, podemos afirmar de ella que se trata de una disolución:",
		ans: "Gas-gas diluida y no saturada.",
		ansSel:["Líquido- gas diluida y no saturada.","Gas-gas concentrada y no saturada.","Líquido-gas concentrada y no saturada."]
	},{
		ques: "Si sabemos que a una determinada temperatura la solubilidad del cloruro de sodio en agua es de 35 g en 100 cm<sup>3</sup> y tenemos una disolución de cloruro de sodio a esa temperatura que contiene 352 g por litro"
			+ "de agua, podemos decir que se trata de:",
		ans: "Una disolución concentrada y sobresaturada.",
		ansSel:["Una disolución concentrada y saturada.","Una disolución diluida y sobresaturada.","No podemos tener nunca esa disolución."]
	},{
		ques: "Indique cual de las siguientes afirmaciones es cierta:",
		ans: "Las tres afirmaciones anteriores son falsas.",
		ansSel: ["Todas las disoluciones saturadas son disoluciones concentradas.","No hay disoluciones gas-líquido saturadas.","En todas las disoluciones hay solamente un soluto y un disolvente"]
	},{
		ques: "Acerca de una disolución podemos afirmar que:",
		ans: "La masa de cualquier disolución es siempre mayor que la de disolvente.",
		ansSel: ["Están formadas por dos componentes: soluto, el mayoritario, y disolvente, el minoritario.","Sus propiedades, diferentes a las de sus componentes, varían según la concentración de la misma.",
			"En cualquier disolución hay siempre mayor cantidad de moles de soluto que de disolvente."]
	},{
		ques: "Una disolución es un sistema:",
		ans: "Homogéneo separable en sus componentes por medios físicos.",
		ansSel: ["Heterogéneo constituido por más de un componente.","Homogéneo constituido por más de un componente y separable en sus componente solamente por medios químicos.","Homogéneo constituido por un solo componente."]
	},{
		ques: "Se deja una disolución de KCI en un frasco, en el que, por estar mal cerrado, al cabo de unas semanas se produce un precipitado. La disolución que hay sobre el precipitado es:",
		ans: "Saturada.",
		ansSel: ["Diluida.","Sobresaturada.","Insaturada"]	
	},{
		ques: "La solubilidad del CO<sub>2</sub> en agua no se ve influida por:",
		ans: "La velocidad con la que se deja pasar el flujo de gas.",
		ansSel : ["La presión.","La temperatura.","La reacción química del gas con el agua"]
	},{
		ques: "Se afirma que :",
		ans: "La solubilidad de los sólidos en agua generalmente aumenta con la temperatura.",
		ansSel : ["La solubilidad del oxígeno en agua aumenta con la temperatura.","Al disolver cloruro sódico en agua, los iones libres en solución no ejercen ningún tipo de interacción con las moléculas del disolvente.", 
			"Se denomina azeótropo a aquellas mezclas en las que las sustancias mezcladas pueden llegar a separarse completamente por destilación."]
	},{
		ques: "¿Cuál es la concentración de iones cloruro, CI<sup>-</sup>, en una disolución 0,3 M de AICI<sub>3</sub>?",
		ans: "0,9 molar.",
		ansSel: ["0,3 molar.","0,1 molar.", "0,6 molar."]
	},{
		ques: "Sabiendo que cuando se disuelve O2 en agua tiene lugar desprendimiento de calor, ¿A qué condiciones, de las que se indican, conseguiríamos que la cantidad de O<sub>2</sub>disuelto fuese mayor?:",
		ans: "-3°C y 10<sup>4</sup>atm.",
		ansSel: ["-3°C y 10<sup>-4</sup>atm.","50°C y 10<sup>-4</sup>atm.","50°C y 10<sup>4</sup>4atm."]
	},{
		ques: "Diez mililitros de H<sub>2</sub>SO<sub>4</sub> concentrado contenidos en un matraz, se mezclan con 100 mililitros de agua.<br>De las siguientes proposiciones señale la que considere correcta:",
		ans: "La masa de la disolución formada es igual a la suma de las masas del sulfúrico y agua mezclados.",
		ansSel: ["El volumen de la disolución formada es igual a 110 mililitros.","La densidad de la disolución formada es igual a la suma de las densidades de las disoluciones de sulfúrico y agua antes de mezclarlos.",
			"La densidad de la disolución formada es igual a la media aritmética de las densidades de las disoluciones de sulfúrico y agua antes de mezclarlos."]
	}
	]
};