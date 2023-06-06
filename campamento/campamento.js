import { LightningElement } from 'lwc';

export default class Campamento extends LightningElement {
    name = "campamento remoto";
    ubication = "Internet";

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
}
