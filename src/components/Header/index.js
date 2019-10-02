import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, CartContainer, CartCounter } from './styles';

export default function Header() {
	return (
		<Wrapper>
			<Container>
				<Logo />
				<CartContainer>
					<Icon name="shopping-basket" color="#fff" size={25} />
					<CartCounter>0</CartCounter>
				</CartContainer>
			</Container>
		</Wrapper>
	);
}
