import AccountScreen from "../screens/AccountScreen"
import CategoryScreen from "../screens/CategoryScreen"
import DetailsScreen from "../screens/DetailsScreen"
import FirstScreen from "../screens/FirstScreen"
import HomeScreen from "../screens/HomeScreen"
import MainSearchScreen from "../screens/MainSearchScreen"
import SearchResultsScreen from "../screens/SearchResultsScreen"
import SearchScreen from "../screens/SearchScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"


// Authentication
const FirstStackScreen = ({ navigation })=> <FirstScreen navigation={navigation}/>


const HomeStackScreen = ({ navigation,route })=> <HomeScreen navigation={navigation} route={route}/>
const CategoryStackScreen = ({ navigation,route })=> <CategoryScreen navigation={navigation} route={route}/>
const SearchStackScreen = ({ navigation,route })=> <SearchScreen navigation={navigation} route={route}/>
const SearchResultsStackScreen = ({ navigation,route })=> <SearchResultsScreen navigation={navigation} route={route}/>

const MainSearchStackScreen = ({ navigation,route })=> <MainSearchScreen navigation={navigation} route={route}/>
const DetailsStackScreen = ({ navigation,route })=> <DetailsScreen navigation={navigation} route={route}/>
const AccountStackScreen = ({ navigation,route })=> <AccountScreen navigation={navigation} route={route}/>
const SignInStackScreen = ({ navigation,route })=> <SignInScreen navigation={navigation} route={route}/>
const SignUpStackScreen = ({ navigation,route })=> <SignUpScreen navigation={navigation} route={route}/>

    
    
export default{
  AccountStackScreen,
  HomeStackScreen,
  FirstStackScreen,
  CategoryStackScreen,
  SearchStackScreen,
  SearchResultsStackScreen,
  MainSearchStackScreen,
  DetailsStackScreen,
  SignInStackScreen,
  SignUpStackScreen
  }