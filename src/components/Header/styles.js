import styled from 'styled-components/native';

import logo from '../../assets/logo.png';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
	background-color: ${colors.dark};
`;

export const Container = styled.View`
	padding: 20px;
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
	source: logo,
	resizeMode: 'cover'
})`
	width: 200px;
	height: 25px;
`;

export const CartContainer = styled.TouchableOpacity`
	width: 25px;
	height: 25px;
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const CartCounter = styled.Text`
	position: absolute;
	color: white;
	background: ${colors.primary};
	font-size: 13px;
	font-weight: bold;
	min-width: 20px;
	min-height: 20px;
	top: -9px;
	right: -9px;
	text-align: center;
	border-radius: 10px;
	overflow: hidden;
`;
