
export default function TransactionReducer(state, action) {
    switch (action.type) {
        case 'ADD TRANSACTION':
            return [...state, action.payload];

        default:
            return state;
    }
}
