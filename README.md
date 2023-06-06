# Padre-Hijo-LWC-
Historia de Aventureros: Conexión entre Componente Padre e Hijo en Lightning Web Components (LWC)


En este caso, el componente padre representa un contexto más amplio, que es la historia de un grupo de aventureros. El componente hijo es responsable de mostrar los detalles de cada aventurero en el contexto de la historia.

El componente padre (campamento) contiene los datos principales de la historia de aventureros, que en este caso se representan como un array de objetos llamado "aventurerosParent". Cada objeto dentro del array representa un aventurero individual y contiene propiedades como "id", "nombre" y "urlAvatar". El componente padre pasa este array de objetos como una propiedad al componente hijo (aventureroDetail).
```
aventurerosParent = [
        {   
            id:1,
            name :'Alba',
            photoUrl : 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg'
        },
        {
            id:2,
            name :'Daniel',
            photoUrl : 'https://www.lightningdesignsystem.com/assets/images/avatar1.jpg'
        },
        {
            id:3,
            name :'Marco',
            photoUrl : 'https://www.lightningdesignsystem.com/assets/images/avatar3.jpg'
        },
        {
            id:4,
            name :'Juan',
            photoUrl : 'https://www.lightningdesignsystem.com/assets/images/avatar1.jpg'
        }

    ];
```
El componente hijo recibe el array de objetos como una propiedad utilizando la anotación @api en la declaración de la propiedad. Luego, utiliza la directiva for:each para iterar sobre cada objeto aventurerosChild en el array y mostrar los detalles individuales en el componente hijo.
```
import { LightningElement, api } from 'lwc';

export default class AventureroDetail extends LightningElement {
    @api aventurerosChild;
}
```

En el ejemplo, el componente hijo (aventureroDetail) muestra la imagen de avatar, el nombre y el ID de cada aventurero dentro del array. Esto se logra utilizando la sintaxis de interpolación {} para acceder a las propiedades del objeto aventurero.

```
<template>
    <h1>Hijo</h1>
    <ul>
      <template  for:each={aventurerosChild} for:item="adv" >
        <li key={adv.id}>

          <div class="user-card">
            <div class="avatar">
                <img src={adv.photoUrl} alt="User Avatar" />
            </div>
            <div class="user-details">
                <p>Nombre: {adv.name}</p>
            </div>
          </div> 
        </li>
      </template>
    </ul>  
</template>
```

Cuando el componente padre se renderiza en Salesforce, se crea una instancia del componente hijo para cada objeto aventurero dentro del array. Cada instancia del componente hijo recibe el objeto aventurerosChild correspondiente y muestra los detalles del aventurero en el componente hijo.

![ejemploLWCpadre-hijo](https://github.com/omarmore/Padre-Hijo-LWC-/assets/12550346/602a067b-7ebc-44cd-bd3e-2476df7c1fc6)

A medida que la historia de aventureros cambia, por ejemplo, si se agrega, actualiza o elimina un aventurero, el componente padre actualiza el array "aventurerosChild". Como LWC ya está monitoreando los cambios en el array, se encarga automáticamente de volver a renderizar el componente hijo con los nuevos datos. Esto garantiza que el componente hijo siempre refleje la historia de aventureros más reciente.

En resumen, la conexión entre el componente padre y el componente hijo en LWC se establece pasando los datos relevantes como propiedades del componente hijo desde el componente padre. El componente hijo recibe y muestra esos datos, y LWC se encarga de mantener actualizada la representación visual del componente hijo cuando los datos cambian en el componente padre.
