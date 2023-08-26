# <center> **Modelo de Caja / Display**
## <center> Concepto del modelo de caja de HTML y describa las diferentes partes que componen la caja
* *El "modelo de caja" en HTML y CSS se refiere a cómo se representan y se organizan los elementos en una página web, especialmente en lo que respecta a su diseño y dimensiones visuales en el navegador. Cada elemento HTML es visualizado como una "caja" rectangular en la página, y esta caja está compuesta por diferentes componentes: contenido, relleno, borde y margen.*  

**Una descripción de cada uno de estos componentes en el modelo de caja:**
1. **Contenido:** Es el contenido real del elemento HTML, como texto, imágenes, vídeos u otros elementos HTML anidados. La altura y el ancho del contenido se definen por las propiedades de dimensionamiento, como `height` y `width`.
2. **Relleno (Padding):** Es un espacio transparente entre el contenido y el borde de la caja. Puede considerarse como un espacio interno que rodea al contenido. El relleno se controla mediante las propiedades de CSS como `padding-top`, `padding-bottom`, `padding-left` y `padding-right`.
3. **Borde:** Es una línea que rodea el contenido y el relleno. Define el límite visual de la caja. Los bordes pueden ser de diferentes tipos (sólidos, punteados, etc.) y se ajustan utilizando propiedades como `border-width`, `border-style` y `border-color`.
4. **Margen (Margin):** Es el espacio transparente fuera del borde de la caja. Los márgenes crean separación entre la caja actual y otras cajas adyacentes. Podemos controlar todos los márgenes de un elemento a la vez usando la propiedad `margin`, o cada lado individualmente usando las propiedades equivalentes sin abreviar:    
   * `margin-top`
   * `margin-bottom` 
   * `margin-left` 
   * `margin-right`

### <Center>El diagrama siguiente muestra estas capas:
<Center> <img src="https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png" width="450" height="350">

#
## Que es la propiedad display y sus valores
*La propiedad display en CSS nos ayuda a controlar dónde se va a ver un elemento HTML dentro de la pantalla para estructurar nuestra página web. Esta propiedad se basa en la lógica del modelo de caja en CSS. En resumen, el modelo de caja en CSS dice que cada elemento HTML es realmente un bloque con una serie de características de borde, margen y padding. Cómo se ven estas características en nuestra página web dependerá de la opción de la propiedad display en CSS que elijamos para el elemento.*

**Los valores básicos de la propiedad display son el valor inline y el valor block.**  

**block:** Los elementos con esta propiedad ocuparán todo el ancho disponible y crearán una nueva línea antes y después del elemento. Son elementos de "bloque" y generalmente se usan para estructuras como párrafos, encabezados y divisiones (`<div>`).  
**inline:** Los elementos se mostrarán en la misma línea que el contenido circundante, permitiendo que otros elementos estén en la misma línea que ellos. No se puede establecer un ancho o alto explícito en elementos en línea. Ejemplos de elementos en línea son `<span>` y `<a>`.  

**Algunos de los valores que la propiedad display puede tener:**  
1.**inline-block:** Combina las características de los elementos en línea y de bloque. Los elementos se muestran en línea, pero aún puedes establecer un ancho y alto para ellos, y permiten que otros elementos estén en la misma línea.    
2.**none:** El elemento no se muestra en absoluto. Se excluye del diseño y no ocupa espacio en la página. Es útil para ocultar elementos de forma condicional.    
3.**flex:** Introduce un contenedor flexible que ajusta automáticamente el tamaño y la alineación de sus elementos secundarios. Es parte del modelo de diseño flexible CSS.  
4.**grid:** Introduce un contenedor de diseño de cuadrícula que permite organizar elementos secundarios en filas y columnas. Es parte del modelo de diseño CSS en cuadrícula.  
5.**table:** El elemento se comporta como una tabla. Puede ser útil para crear diseños tabulares, pero generalmente se recomienda el uso de enfoques más modernos como Flexbox o CSS Grid.  
6.**inline-table:**     Similar al valor table, pero el elemento se comporta como una tabla en línea, lo que significa que no inicia una nueva línea.
<Center> <img src="https://i.ytimg.com/vi/Mlzz1xRB0sc/maxresdefault.jpg" width="400" height="300">  

#
### Fuentes de informacíon
[DEV](https://dev.to/lupitacode/la-propiedad-display-en-css-1b6a)  
[M mdn web docs](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)