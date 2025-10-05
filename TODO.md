# TODO List for Fixing ERR_INSUFFICIENT_RESOURCES Error

## Completed Tasks
- [x] Identified the root cause: useEffect in Appcontext.jsx running on every render due to missing dependency array, causing infinite API calls.
- [x] Fixed the useEffect by adding an empty dependency array [] to run only on component mount.

## Next Steps
- [ ] Test the application to ensure the API calls are no longer causing ERR_INSUFFICIENT_RESOURCES.
- [ ] Ensure the server is running on localhost:4000.
- [ ] Verify that the environment variables (VITE_BACKEND_URL) are set correctly in the client.
- [ ] If issues persist, check for any other infinite loops or excessive API calls in the codebase.
