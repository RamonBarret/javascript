let valores = [9, 45, 22, 31, 2, 9]
valores.sort()

/* 
for(let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/
 for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }