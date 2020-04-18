import React from "react";
import { FormFile } from "../../components/Form/FormFile";
import "./styles.css";

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('Realizando o uploading...', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="avatar"/>);
        } else {
            $imagePreview = (<div className="previewText">Selecione uma imagem para visualização</div>);
        }

        return (
            <div className="previewComponent">
                <div onSubmit={(e) => this._handleSubmit(e)}>
                    <FormFile
                        name="avatar"
                        onChange={(e) => this._handleImageChange(e)} 
                    /> 
                </div>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload