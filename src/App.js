import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';
import { LoadingOutlined } from '@ant-design/icons';
import ProductsLayout from './components/AdminDashboard/Layout/ProductsLayout';
import CreateProductLayout from './components/AdminDashboard/Layout/CreateProductLayout';
import CreateProductLayout1 from './components/SellerDashboard/Layout/CreateProductLayout';
import UpdateProductLayout from './components/AdminDashboard/Layout/UpdateProductLayout';
import OrdersLayout from './components/AdminDashboard/Layout/OrdersLayout';
import CreateCategoryLayout from './components/AdminDashboard/Layout/CreateCategoryLayout';
import UpdateCategoryLayout from './components/AdminDashboard/Layout/UpdateCategoryLayout';
import UpdateSubLayout from './components/AdminDashboard/Layout/UpdateSubLayout';
import CouponLayout from './components/AdminDashboard/Layout/CouponLayout';
import SellWithUs from './pages/SellWithUs';
import Apply from './pages/Apply';
import SellersAppsLayout from './components/AdminDashboard/Layout/SellersAppsLayout';
import SellersAppsLayoutReview from './components/AdminDashboard/Layout/SellersAppsLayoutReview';
import Store from './pages/seller/Store';
import Store1 from './pages/Store1';
import Store_Clothing from './pages/Store_Clothing';
import Store_Electronics from './pages/Store_Electronics';

// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Home from "./pages/Home";
// import Header from "./components/nav/Header";
// import SideDrawer from "./components/drawer/SideDrawer";

// import RegisterComplete from "./pages/auth/RegisterComplete";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import History from "./pages/user/History";
// import UserRoute from "./components/routes/UserRoute";
// import AdminRoute from "./components/routes/AdminRoute";
// import Password from "./pages/user/Password";
// import Wishlist from "./pages/user/Wishlist";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import CategoryCreate from "./pages/admin/category/CategoryCreate";
// import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
// import SubCreate from "./pages/admin/sub/SubCreate";
// import SubUpdate from "./pages/admin/sub/SubUpdate";
// import ProductCreate from "./pages/admin/product/ProductCreate";
// import AllProducts from "./pages/admin/product/AllProducts";
// import ProductUpdate from "./pages/admin/product/ProductUpdate";
// import Product from "./pages/Product";
// import CategoryHome from "./pages/category/CategoryHome";
// import SubHome from "./pages/sub/SubHome";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";
// import Payment from "./pages/Payment";

// using lazy
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Home = lazy(() => import('./pages/Home'));
const TopHeader = lazy(() => import('./components/nav/topheader/TopHeader'));
const SideDrawer = lazy(() => import('./components/drawer/SideDrawer'));

const RegisterComplete = lazy(() => import('./pages/auth/RegisterComplete'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const History = lazy(() => import('./pages/user/History'));
const UserRoute = lazy(() => import('./components/routes/UserRoute'));
const AdminRoute = lazy(() => import('./components/routes/AdminRoute'));
const SellerRoute = lazy(() => import('./components/routes/SellerRoute'));
const Password = lazy(() => import('./pages/user/Password'));
const Wishlist = lazy(() => import('./pages/user/Wishlist'));

const CategoryCreate = lazy(() =>
    import('./pages/admin/category/CategoryCreate')
);
const CategoryUpdate = lazy(() =>
    import('./pages/admin/category/CategoryUpdate')
);
const SubCreate = lazy(() => import('./pages/admin/sub/SubCreate'));
const SubUpdate = lazy(() => import('./pages/admin/sub/SubUpdate'));
const ProductCreate = lazy(() => import('./pages/admin/product/ProductCreate'));
const AllProducts = lazy(() => import('./pages/admin/product/AllProducts'));
const ProductUpdate = lazy(() => import('./pages/admin/product/ProductUpdate'));
const Product = lazy(() => import('./pages/Product'));
const CategoryHome = lazy(() => import('./pages/category/CategoryHome'));
const SubHome = lazy(() => import('./pages/sub/SubHome'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const StoreHome = lazy(() => import('./pages/Store'));
const Dashboard = lazy(() =>
    import('./components/AdminDashboard/Layout/Dashboard')
);
const UsersLayout = lazy(() =>
    import('./components/AdminDashboard/Layout/UsersLayout')
);
const CreateSubLayout = lazy(() =>
    import('./components/AdminDashboard/Layout/CreateSubLayout')
);

const CreateCouponPage = lazy(() =>
    import('./pages/admin/coupon/CreateCouponPage')
);
const Payment = lazy(() => import('./pages/Payment'));

const App = () => {
    const dispatch = useDispatch();

    // to check firebase auth state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                // console.log("user", user);

                currentUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: 'LOGGED_IN_USER',
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                picture: res.data.picture,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                                hasStore: res.data.hasStore,
                                sentApp: res.data.sentApp,
                            },
                        });
                    })
                    .catch((err) => console.log(err));
            }
        });
        // cleanup
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <Suspense
            fallback={
                <div className="col text-center p-5">
                    <LoadingOutlined />
                </div>
            }
        >
            <SideDrawer />
            <ToastContainer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route
                    exact
                    path="/register/complete"
                    component={RegisterComplete}
                />
                <Route
                    exact
                    path="/forgot_password"
                    component={ForgotPassword}
                />
                <Route exact path="/sell-with-us" component={SellWithUs} />
                <UserRoute exact path="/user/orders" component={History} />
                <UserRoute exact path="/user/password" component={Password} />
                <UserRoute exact path="/user/wishlist" component={Wishlist} />
                <UserRoute exact path="/sell-with-us/apply" component={Apply} />
                <AdminRoute
                    exact
                    path="/admin/dashboard"
                    component={Dashboard}
                />
                <AdminRoute
                    exact
                    path="/admin/orders"
                    component={OrdersLayout}
                />
                <AdminRoute exact path="/admin/users" component={UsersLayout} />
                <AdminRoute
                    exact
                    path="/admin/category"
                    component={CreateCategoryLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/category/:slug"
                    component={UpdateCategoryLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/sellersApps"
                    component={SellersAppsLayout}
                />
                <AdminRoute
                    path="/admin/sellersApps/:_id"
                    component={SellersAppsLayoutReview}
                />
                <AdminRoute
                    exact
                    path="/admin/sub"
                    component={CreateSubLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/sub/:slug"
                    component={UpdateSubLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/product"
                    component={CreateProductLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/products"
                    component={ProductsLayout}
                />
                <AdminRoute
                    exact
                    path="/admin/product/:slug"
                    component={UpdateProductLayout}
                />
                <SellerRoute
                    exact
                    path="/seller/Createstore/"
                    component={Store}
                />
                <SellerRoute
                    exact
                    path="/seller/createProduct/"
                    component={CreateProductLayout1}
                />

                <Route exact path="/product/:slug" component={Product} />
                <Route
                    exact
                    path="/store/61622be0f766c19682d5df88"
                    component={Store_Clothing}
                />
                <Route
                    exact
                    path="/store/6162323df766c19682d5df8d"
                    component={Store_Electronics}
                />
                <Route
                    exact
                    path="/store/6143b012e749713fd019e8a4"
                    component={StoreHome}
                />
                <Route
                    exact
                    path="/store/616224cbf766c19682d5df87"
                    component={Store1}
                />
                <Route exact path="/category/:slug" component={CategoryHome} />
                <Route exact path="/sub/:slug" component={SubHome} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <UserRoute exact path="/checkout" component={Checkout} />
                <AdminRoute
                    exact
                    path="/admin/coupon"
                    component={CouponLayout}
                />
                <UserRoute exact path="/payment" component={Payment} />
            </Switch>
        </Suspense>
    );
};

export default App;
