// import useUserStore from "@/modules/users/store/users.js";
//
//
// export async function permissionsMiddleware(to) {
//     const userStore = useUserStore();
//     if (to.meta.requiresAuth && !userStore.isAuth) {
//         return {
//             path: '/login',
//             query: {redirect: to.fullPath},
//         }
//     }
//
// }
