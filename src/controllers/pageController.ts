import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        list
    })
    
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    menu: createMenuObject('dog'),
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    menu: createMenuObject('cat'),
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    menu: createMenuObject('fish'),
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list
    });
};

