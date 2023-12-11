import LoadingGif from '../assets/images/cat-spinner.gif';

const Loading = () => {
    return (
        <main>
            <img src={LoadingGif} alt="El gif cargando" />
            <p>Cargando</p>
        </main>
    );
};

export default Loading;