import CategoryScreen from "../screens/CategoryScreen"
import FirstScreen from "../screens/FirstScreen"
import HomeScreen from "../screens/HomeScreen"
import SearchResultsScreen from "../screens/SearchResultsScreen"
import SearchScreen from "../screens/SearchScreen"


// Authentication
const FirstStackScreen = ({ navigation })=> <FirstScreen navigation={navigation}/>


const HomeStackScreen = ({ navigation,route })=> <HomeScreen navigation={navigation} route={route}/>
const CategoryStackScreen = ({ navigation,route })=> <CategoryScreen navigation={navigation} route={route}/>
const SearchStackScreen = ({ navigation,route })=> <SearchScreen navigation={navigation} route={route}/>
const SearchResultsStackScreen = ({ navigation,route })=> <SearchResultsScreen navigation={navigation} route={route}/>

    
    
export default{
  HomeStackScreen,
  FirstStackScreen,
  CategoryStackScreen,
  SearchStackScreen,
  SearchResultsStackScreen
  }