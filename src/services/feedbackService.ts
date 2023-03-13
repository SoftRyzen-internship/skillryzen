import axios, { AxiosResponse } from 'axios';

interface FeedbackData {
  sheetName?: string;
  name?: string;
  role?: string;
  email: string;
  message: string;
  pathname: string;
}

export const sendFeedbackService = async (
  feedbackData: FeedbackData
): Promise<AxiosResponse> => {
  const formData = new FormData();
  formData.set('sheetName', feedbackData.sheetName || '');
  formData.set('name', feedbackData.name || '');
  formData.set('role', feedbackData.role || '');
  formData.set('email', feedbackData.email);
  formData.set('message', feedbackData.message);
  formData.set('pathname', feedbackData.pathname);

  const response = await axios.post(
    'https://script.google.com/macros/s/AKfycby3jpyizyCAN8Od1rh3VA6FLE6G7nXK40lxzJgdnZzVyTIbtBq5iWsEBjWGm23Wv1MLpg/exec',
    formData
  );
  return response;
};
