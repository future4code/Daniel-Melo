import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.props.comentario}
				onChange={this.props.aoMudar}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
