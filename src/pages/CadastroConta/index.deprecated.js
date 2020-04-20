import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { FormGroup, Label, CustomInput } from 'reactstrap';
import UserForm from '../../components/Forms/UserForm';

const CadastroConta = () => {

    const [imgCrop, setImgCrop] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const preloadImage = (url, crossOrigin = 'anonymous') => (
        new Promise((resolve, reject) => {
            let img = new Image();
    
            img.crossOrigin = crossOrigin;
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.setAttribute('src', url);
        })
    );

    const getCroppedImageUrl = (url, cropMask) => (
        preloadImage(url)
            .then((image) => {
                let canvas = document.createElement('canvas');
                canvas.setAttribute('width', cropMask.width);
                canvas.setAttribute('height', cropMask.height);
    
                let context = canvas.getContext('2d');
                context.drawImage(image,
                    cropMask.x, cropMask.y, cropMask.width, cropMask.height,
                    0, 0, cropMask.width, cropMask.height
                );
                setImgCrop(canvas.toDataURL('image/png'))
                return (canvas.toDataURL('image/png'));
            })
    );

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        getCroppedImageUrl(imageFile, croppedAreaPixels)
    }, [imageFile])

    return(
        <>
        <UserForm imageFinal={imgCrop} componentImage={
            <FormGroup className="file-input">
                <Label for="avatar">Logo da Empresa:</Label>
                <CustomInput 
                type="file" 
                name="avatar" 
                id="avatar" 
                label="Selecione uma imagem" 
                onChange={(event) => {
                    setImageFile(URL.createObjectURL(event.target.files[0]));
                    // if (typeof event.target.files[0] !== "undefined") {
                    // } else {
                    //     setImgCrop("")
                    //     setImageFile("")
                    // }
                }} 
                />
                <div id="crop-image">
                    {imageFile && <div id="form-cadastro">
                        <div id="image_cropper">
                            <Cropper
                            image={imageFile}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            />
                        </div>
                    </div>}
                </div>
            </FormGroup>
        }/>
        </>
    )
}

export default CadastroConta;
