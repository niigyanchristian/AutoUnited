import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppScrowCard from '../components/AppScrowCard';
import useApi from '../hooks/useApi';
import categories from '../api/categories';
import colors from '../config/colors';
import useActiveScreenFunc from '../hooks/useActiveScreenFunc';
import usecart from '../auth/usecart';

function CategoryScreen(props) {
  const { width } = useAuth();
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const getCategoriesApi = useApi(categories.getCategories);
  const getSubCategoryApi = useApi(categories.getSubCategory);
  const [items,setItems]=useState([]);

    const getFunc = async () => {
      setItems(await usecart.getCart());
    };

  useEffect(() => {
    handleSubmit();
  }, []);
  useActiveScreenFunc().FocusedAndBlur(()=>getFunc(),()=>null)

  const handleSubmit = async () => {
    setActive(true);
    const response = await getCategoriesApi.request();
    setCategoriesData(response.data.results);

    // Fetch subcategories for all categories
    const subcategoriesPromises = response.data.results.map((category) =>
      getSubCategory(category.category_id)
    );

    // Wait for all subcategory requests to complete
    const subcategories = await Promise.all(subcategoriesPromises);
    setSubCatData(subcategories);
  };

  const getSubCategory = async (id) => {
    const data = await getSubCategoryApi.request(id);
    return data.data.results;
  };

  return (
    <View style={styles.container}>
      <AppHeader Component={<AppText fontFamily='NunitoExtraBold'
              fontSize={width * 0.045}>Parts</AppText>} cartCount={items.length}/>
      <ScrollView contentContainerStyle={{ width: width }}>
        {categoriesData.map((category, index) => (
          <React.Fragment key={index}>
            <AppText
              fontFamily='NunitoExtraBold'
              marginTop='5%'
              marginLeft='3%'
              fontSize={width * 0.045}
            >
              {category.category_name}
            </AppText>
            <View style={[styles.wapper, {}]}>
              <AppScrowCard
                toggleBgColor={false}
                data={subCatData[index] || []}
              />
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  wapper: {
    width: '100%',
    borderColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryMedium,
  },
});
