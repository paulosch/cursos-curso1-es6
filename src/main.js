import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (e) {
            console.log("Erro: ", e);
        }
    }
}

Api.getUserInfo('diego3g');



// const arr = [1,2,3,3,4,4,5,5,5];

// const newArr = arr.map((item, index) => {
//     return item * index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     return total + next;
// })

// const filter = arr.filter(item => {
//     return item % 2 === 0;
// })

// const find = arr.find(item => item == 4);

// const teste = () => {

// }

// // rest
// const usuario = {
//     nome: 'Paulo',
//     idade: '27',
//     empresa: 'Washcar'
// };

// const { nome, ...resto } = usuario;

// // spread
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [ ...arr1, ...arr2];