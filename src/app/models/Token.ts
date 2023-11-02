/**
 * Model Token
 * Type de variable pour le token d'authentification
 * Temporaire car usage de firebase AuthGuard plutard
 */

export class Token {
    _id!: string; // uid de l'utilisateur
    email!: string; // email de l'utilisateur
    token!: string; // Token de firebase
    refreshToken!: string; // Refresh Token de firebase
};