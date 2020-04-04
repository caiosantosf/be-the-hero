import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native'
import * as MailCompose from 'expo-mail-composer'

import styles from './style'
import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident  
  const message = `Olá ${incident.name}, estou entrado em contato para ajudar no caso ${incident.title}`

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailCompose.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg}></Image>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color='#E82041'></Feather>
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BT', {
            style: 'currency', 
            currency: 'BLR'
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contectBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View styles={styles.actions}>
          <TouchableOpacity styles={styles.action} onPress={sendWhatApp}>
            <Text style={styles.actionText}>WhatApp</Text>
          </TouchableOpacity>

          <TouchableOpacity styles={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}