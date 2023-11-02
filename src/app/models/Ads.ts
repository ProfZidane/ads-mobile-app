/**
 * Model d'annonce
 * Typage des variables 
 */

export class Ads {
    title!: string; //  Titre de l'annonce
    description!: string; // Description
    type!: string; // Type de l'annonce
    photo!: string; // Photo ou image de l'annonce
    owner!: string; // Propriétaire ou créateur de l'annonce
    created_at!: string; // Date de création
};