import React from 'react';
import { StyleSheet, View,ScrollView,TouchableOpacity,Text} from 'react-native';
import { Table,TableWrapper,Cell  } from 'react-native-table-component';


export function TableList (props) {

    const element = (data, index) => (
        <TouchableOpacity onPress={() => props.openInfo(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{props.cityArr[index]}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <Table borderStyle={{borderWidth: 2, borderColor: '#7a7a7a'}}>
                    {
                        props.viewArr.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, paddingTop: 20, backgroundColor: '#fff' },
    text: {
        alignItems:'center',
        marginVertical:10,
        marginLeft:3
    },
    row: { flexDirection: 'row'},
    btn: { width:'100%' , height: 'auto'},
    btnText: { textAlign: 'center'},
    table:{borderWidth: 2, borderColor: '#c8e1ff'}
});