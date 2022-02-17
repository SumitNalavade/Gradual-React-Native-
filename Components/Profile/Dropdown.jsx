import { StyleSheet } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

export default function Dropdown({ data, defaultValue }) {
    return (
        <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
    
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownText}
        defaultValue={defaultValue} />
    )
}

const styles = StyleSheet.create({
    dropdownButton: {
        height: 30,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "white"
    },

    dropdownText: {
        fontSize: 15
    }
})