import { supabase } from '../config/supabaseClient';
import { Request, Response } from 'express';

interface LoginRequest extends Request {
    body: {
        email: string;
        password: string;
    };
}

/**
 * Function to log in a user.
 * @param req Request object
 * @param res Response object
 * @returns {Promise<Response>} - A response object
 * @throws {Response} - An error message
 * 
 */
export const login = async (req:LoginRequest, res:Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return res.status(401).json({ error: error.message });
        }
        else {
            if (data.session && data.session.access_token) {
                const token = data.session.access_token;
                res.cookie('token', token, {httpOnly: true, secure: true});
                return res.status(200).json({ message: 'Login successful' });
            }
            else {
                return res.status(401).json({ error: 'Login failed' });
            }
        }
    }
    catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
};

export const register = async (req:LoginRequest, res:Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            return res.status(401).json({ error: error.message });
        }
        else {
            if (data) {
                return res.status(200).json({ message: 'Registration successful' });
            }
            else {
                return res.status(401).json({ error: 'Registration failed' });
            }
        }
    }
    catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
};