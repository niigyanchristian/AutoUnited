import AccountScreen from "../screens/AccountScreen"
import CarsScreen from "../screens/cars/CarsScreen"
import CartScreen from "../screens/CartScreen"
import CategoryScreen from "../screens/CategoryScreen"
import DetailsScreen from "../screens/DetailsScreen"
import FillProfileScreen from "../screens/FillProfileScreen"
import FirstScreen from "../screens/FirstScreen"
import HomeScreen from "../screens/HomeScreen"
import MainSearchScreen from "../screens/MainSearchScreen"
import SearchResultsScreen from "../screens/SearchResultsScreen"
import SearchScreen from "../screens/SearchScreen"
// import SearchScreen from "../../SearchScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import GoogleMapScreen from "../screens/home/GoogleMapScreen"
import ServicesScreen from "../screens/home/ServicesScreen"
import AddCarScreen from "../screens/cars/AddCarScreen"
import CardetailsScreen from "../screens/cars/CardetailsScreen"
import PrivacyPolicyScreen from "../screens/account/Privacy"
import TermsAndConditionsScreen from "../screens/account/TermsAndConditionsScreen"


const AccountStackScreen = ({ navigation,route })=> <AccountScreen navigation={navigation} route={route}/>
const AddCarStackScreen = ({ navigation,route })=> <AddCarScreen navigation={navigation} route={route}/>

const CarsStackScreen = ({ navigation,route })=> <CarsScreen navigation={navigation} route={route}/>
const CategoryStackScreen = ({ navigation,route })=> <CategoryScreen navigation={navigation} route={route}/>
const CartStackScreen = ({ navigation,route })=> <CartScreen navigation={navigation} route={route}/>
const CardetailsStackScreen = ({ navigation,route })=> <CardetailsScreen navigation={navigation} route={route}/>

const DetailsStackScreen = ({ navigation,route })=> <DetailsScreen navigation={navigation} route={route}/>

const FirstStackScreen = ({ navigation })=> <FirstScreen navigation={navigation}/>
const FillProfileStackScreen = ({ navigation,route })=> <FillProfileScreen navigation={navigation} route={route}/>

const GoogleMapStackScreen = ({ navigation,route })=> <GoogleMapScreen navigation={navigation} route={route}/>

const HomeStackScreen = ({ navigation,route })=> <HomeScreen navigation={navigation} route={route}/>

const MainSearchStackScreen = ({ navigation,route })=> <MainSearchScreen navigation={navigation} route={route}/>

const PrivacyPolicyStackScreen = ({ navigation,route })=> <PrivacyPolicyScreen navigation={navigation} route={route}/>

const SearchStackScreen = ({ navigation,route })=> <SearchScreen navigation={navigation} route={route}/>
const SearchResultsStackScreen = ({ navigation,route })=> <SearchResultsScreen navigation={navigation} route={route}/>
const SignInStackScreen = ({ navigation,route })=> <SignInScreen navigation={navigation} route={route}/>
const SignUpStackScreen = ({ navigation,route })=> <SignUpScreen navigation={navigation} route={route}/>
const ServicesStackScreen = ({ navigation,route })=> <ServicesScreen navigation={navigation} route={route}/>

const TermsAndConditionsStackScreen = ({ navigation,route })=> <TermsAndConditionsScreen navigation={navigation} route={route}/>
    
    
export default{
  AccountStackScreen,
  AddCarStackScreen,
  CategoryStackScreen,
  CartStackScreen,
  CardetailsStackScreen,
  CarsStackScreen,
  DetailsStackScreen,
  FirstStackScreen,
  FillProfileStackScreen,
  GoogleMapStackScreen,
  HomeStackScreen,
  MainSearchStackScreen,
  PrivacyPolicyStackScreen,
  SearchStackScreen,
  SearchResultsStackScreen,
  SignInStackScreen,
  SignUpStackScreen,
  ServicesStackScreen,
  TermsAndConditionsStackScreen
  }