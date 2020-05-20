// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 초기 상태
const initialState = {
    number: 0
};


// [INCREMENT]: (state, action) => {
//     return { number: state.number + 1 };
// },
export default handleActions({
        [INCREMENT]: ({ number }) => ({ number: number + 1})
        , [DECREMENT]: ({ number }) => ({ number: number - 1})
    }, initialState);

// 리듀서
// export default function reducer(state = initialState, action) {
//     // 액션 타입에 따른 상태 정의
//     switch(action.type) {
//         case INCREMENT:
//             return { number: state.number + 1 };
//         case DECREMENT:
//             return { number: state.number - 1 };
//         default:
//             return state;
//     }
// }