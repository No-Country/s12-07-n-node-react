import axios from 'axios'
import { TEST_API_URL } from '../data/constants'

export const GetTestData = async () => {
  return await axios.get(TEST_API_URL)
}

