import React from "react";
import Logo from "./src/assets/codeoholics.jpeg";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

function EventTicket({ userDetails }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundImage: Logo,
    },
    title: {
      textAlign: "center",
      fontSize: 24,
      margin: 10,
      color: "#000",
    },
    detail: {
      textAlign: "center",
      fontSize: 16,
      margin: 10,
      color: "#000",
    },
  });
  return (
    <Document>
      <Page size="A6" style={styles.page}>
        <Text style={styles.title}>Event Ticket</Text>
        <Text style={styles.detail}>Name: {userDetails.userName}</Text>
        <Text style={styles.detail}>Email: {userDetails.userEmail}</Text>
        <Text style={styles.detail}>Roll Number: {userDetails.userRollNo}</Text>
        <Text style={styles.detail}>
          Phone Number: {userDetails.phoneNumber}
        </Text>
      </Page>
    </Document>
  );
}

export default EventTicket;
