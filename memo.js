export const memo = (fn) => {
  const cache = new Map;

  return function(...args) {
    const key = JSON.stringify(args)
    
    // Verificando se a função foi executada anteriormente com os mesmo argumentos
    if(!cache.has(key)) {
    
      // Executando a função e guardando o resultado e sua chave no cache.
      cache.set(key, fn(...args))
    }
    
    // Retornando diretamente o resultado guardado em cache.
    return cache.get(key)
  }
}
