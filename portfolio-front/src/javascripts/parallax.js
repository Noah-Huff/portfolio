import Rellax from 'rellax';

const allParallax = () => {


    let mounain_1 = new Rellax('#mountain-1', {
        speed: .7,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let mountain_2 = new Rellax('#mountain-2', {
        speed: .6,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let mountain_3 = new Rellax('#mountain-3', {
        speed: .4,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let mountain_4 = new Rellax('#mountain-4', {
        speed: .3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let mountain_5 = new Rellax('#mountain-5', {
        speed: .2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let lake = new Rellax('#lake', {
        speed: .75,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let lake_grass = new Rellax('#lake-grass', {
        speed: 0,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let far_trees = new Rellax('#far-trees', {
        speed: .75,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let near_trees = new Rellax('#near-trees', {
        speed: .9,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });






    let cloud_1 = new Rellax('#cloud-1', {
        speed: .8,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let cloud_2 = new Rellax('#cloud-2', {
        speed: 2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let cloud_3 = new Rellax('#cloud-3', {
        speed: .3,
        center: false,
        wrapper: null,
        round: true,
        vertical: false,
        horizontal: true
    });
    let cloud_4 = new Rellax('#cloud-4', {
        speed: .6,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    let title = new Rellax('.title', {
        speed: -5,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

}

export {
    allParallax
}
