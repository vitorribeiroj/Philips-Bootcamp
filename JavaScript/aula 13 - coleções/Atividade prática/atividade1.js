function getAdmins(colecao) {

    let listaAdmins = []

    for (membro of colecao) {
        if (colecao.get(membro[0]) == 'ADMIN') {
            listaAdmins.push(membro[0])
        }
    }

    return listaAdmins
}

let map = new Map()

map.set('Vitor', 'ADMIN')
map.set('Mariana', 'user')
map.set('Sara', 'user')
map.set('Wania', 'ADMIN')
map.set('Flavio', 'user')

console.log('Lista de Administradores:\n')

for(let i = 0; i < getAdmins(map).length; i++){
    console.log(`${i+1}. ${getAdmins(map)[i]}`)
}