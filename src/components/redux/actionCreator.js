export function addToCart(id) {
    return {
        type: 'ADD_GOODS_CARD',
        payload:{id}
      }
}

export function deleteToCard(id) {
    return {
        type: 'DELETE_GOODS_CARD',
        payload:{id}
      }
}