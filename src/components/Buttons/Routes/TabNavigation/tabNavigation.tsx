/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Favorites } from '../../../../screens/Favorites/favorites.page';
import { Historic } from '../../../../screens/Historic/historic.page';
import { Home } from '../../../../screens/Home/home.page';
import { Profile } from '../../../../screens/Profile/profile.page';
import { RoutesButton } from '../ButtonNavigation/RoutesButton';
import {
  Button, Container, Tab,
} from './style';
import HomeIcon from '../../../../assets/icons/home.svg'
import FavoritesIcon from '../../../../assets/icons/favorites.svg'
import HistoricIcon from '../../../../assets/icons/historic.svg'
import ProfileIcon from '../../../../assets/icons/profile.svg'
import HomeActiveIcon from '../../../../assets/icons/homeActive.svg'
import FavoritesActiveIcon from '../../../../assets/icons/favoritesActive.svg'
import HistoricActiveIcon from '../../../../assets/icons/historicActive.svg'
import ProfileActiveIcon from '../../../../assets/icons/profileActive.svg'

type Props = {
  navigation:any,
  check:any,

}

export function TabNavigation({ navigation, check } : Props) {
  return (
    <Tab>
      <Container>
        <Button>
          <RoutesButton
            title="inicio"
            onPress={() => { navigation.navigate(Home) }}
            checked={check === 1 ? false : true}
            icon={ check === 1 ? <HomeActiveIcon /> : <HomeIcon />}
          />
        </Button>
        <Button>

          <RoutesButton title="Favoritos" checked={check === 2 ? false : true} icon={ check === 2 ? <FavoritesActiveIcon /> : <FavoritesIcon />} onPress={() => { navigation.navigate(Favorites) }} />
        </Button>
        <Button>
          <RoutesButton title="Historico" checked={check === 3 ? false : true} icon={ check === 3 ? <HistoricActiveIcon /> : <HistoricIcon />} onPress={() => { navigation.navigate(Historic) }} />
        </Button>
        <Button>
          <RoutesButton title="Perfil" checked={check === 4 ? false : true} icon={ check === 4 ? <ProfileActiveIcon /> : <ProfileIcon />} onPress={() => { navigation.navigate(Profile) }} />
        </Button>

      </Container>
    </Tab>
  )
}
