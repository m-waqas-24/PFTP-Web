import React, { Component } from 'react';
import { StyleSheet, Text, View,Document,Page,PDFViewer,Image  } from '@react-pdf/renderer'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol: { 
      width: "33.3%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
   
    tableCell: { 
      margin: "auto", 
      marginTop: 10, 
      marginBottom:10,
      fontSize: 10 
    },
    page: {
      backgroundColor: "#d11fb6",
      color: "white",
    },
    section: {
      margin: 0,
      padding: 0,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    bold:{
   
    }
  });
  
  const PDF = () => (
    <PDFViewer style={styles.viewer}>
    <Document title='Invoice'>
      <Page size="A4" orientation={'landscape'} title=""  style={styles.body}>
        <View style={styles.table}> 
          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
            {/* <Image src={''}/> */}
              <Text style={styles.tableCell}>Professional Freelancing Training Program</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Professional Freelancing Training Program</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Professional Freelancing Training Program</Text> 
            </View> 
          </View>
          <View style={styles.tableRow}> 
             
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Fee Voucher </Text> 
              
              
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 
          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
             
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
          
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 
          
          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 

          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 


          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 


          <View style={styles.tableRow}> 
           
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 


          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 


          <View style={styles.tableRow}> 
            
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 


          <View style={styles.tableRow}> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>React-PDF</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>3 User </Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>5€</Text> 
            </View> 
          </View> 
        </View>
      </Page>
    </Document>
    </PDFViewer>
  );
  

export default PDF