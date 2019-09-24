import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const getContainerStyle = (extraStyle) => ({
    position: 'absolute',
    zIndex: 1000,
    ...extraStyle
});

const ZoomOutButton = ({ disabled, onClick, zoomOutComponent }) => {
    if (zoomOutComponent) {
        return (
            <div onClick={onClick}>
                {zoomOutComponent}
            </div>
        );
    }

    return (
        <button className='iconButton' style={{ margin: '10px' }} onClick={onClick} disabled={disabled}>
            <FontAwesomeIcon icon={faMinus} />
        </button>
    )
};

const ZoomInButton = ({ disabled, onClick, zoomInComponent }) => {
    if (zoomInComponent) {
        return (
            <div onClick={onClick}>
                {zoomInComponent}
            </div>
        );
    }

    return (
        <button className='iconButton' style={{ margin: '10px', marginLeft: '0px' }} onClick={onClick} disabled={disabled}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
};

const ZoomButtons = ({ scale, minScale, maxScale, onZoomInClick, onZoomOutClick, zoomInComponent, zoomOutComponent, extraStyle }) => (
    <div style={getContainerStyle(extraStyle)}>
        <ZoomOutButton onClick={onZoomOutClick} disabled={scale <= minScale} zoomOutComponent={zoomOutComponent} />
        <ZoomInButton onClick={onZoomInClick} disabled={scale >= maxScale} zoomInComponent={zoomInComponent} />
    </div>
);

ZoomButtons.propTypes = {
    scale: PropTypes.number.isRequired,
    minScale: PropTypes.number.isRequired,
    maxScale: PropTypes.number.isRequired,
    onZoomInClick: PropTypes.func.isRequired,
    onZoomOutClick: PropTypes.func.isRequired,
};

export default ZoomButtons;