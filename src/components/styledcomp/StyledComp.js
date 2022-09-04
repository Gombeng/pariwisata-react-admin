import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: ${(props) => (props.center ? 'center' : 'start')};
	max-width: 90%;
	min-height: 90vh;
	margin: 0 auto;
`;

const Flexbox = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* max-height: 270vh; */
	width: ${(props) => props.width};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	align-items: ${(props) => (props.start ? 'start' : 'center')};
	justify-content: ${(props) => props.justify};
	/* background: #000; */

	& > div {
		flex: 1;
	}
`;

export { Container, Flexbox };
