"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@simplewebauthn";
exports.ids = ["vendor-chunks/@simplewebauthn"];
exports.modules = {

/***/ "(ssr)/./node_modules/@simplewebauthn/browser/dist/bundle/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@simplewebauthn/browser/dist/bundle/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebAuthnAbortService: () => (/* binding */ WebAuthnAbortService),\n/* harmony export */   WebAuthnError: () => (/* binding */ WebAuthnError),\n/* harmony export */   base64URLStringToBuffer: () => (/* binding */ base64URLStringToBuffer),\n/* harmony export */   browserSupportsWebAuthn: () => (/* binding */ browserSupportsWebAuthn),\n/* harmony export */   browserSupportsWebAuthnAutofill: () => (/* binding */ browserSupportsWebAuthnAutofill),\n/* harmony export */   bufferToBase64URLString: () => (/* binding */ bufferToBase64URLString),\n/* harmony export */   platformAuthenticatorIsAvailable: () => (/* binding */ platformAuthenticatorIsAvailable),\n/* harmony export */   startAuthentication: () => (/* binding */ startAuthentication),\n/* harmony export */   startRegistration: () => (/* binding */ startRegistration)\n/* harmony export */ });\n/* [@simplewebauthn/browser@9.0.1] */\nfunction utf8StringToBuffer(value) {\n    return new TextEncoder().encode(value);\n}\n\nfunction bufferToBase64URLString(buffer) {\n    const bytes = new Uint8Array(buffer);\n    let str = '';\n    for (const charCode of bytes) {\n        str += String.fromCharCode(charCode);\n    }\n    const base64String = btoa(str);\n    return base64String.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');\n}\n\nfunction base64URLStringToBuffer(base64URLString) {\n    const base64 = base64URLString.replace(/-/g, '+').replace(/_/g, '/');\n    const padLength = (4 - (base64.length % 4)) % 4;\n    const padded = base64.padEnd(base64.length + padLength, '=');\n    const binary = atob(padded);\n    const buffer = new ArrayBuffer(binary.length);\n    const bytes = new Uint8Array(buffer);\n    for (let i = 0; i < binary.length; i++) {\n        bytes[i] = binary.charCodeAt(i);\n    }\n    return buffer;\n}\n\nfunction browserSupportsWebAuthn() {\n    return (window?.PublicKeyCredential !== undefined &&\n        typeof window.PublicKeyCredential === 'function');\n}\n\nfunction toPublicKeyCredentialDescriptor(descriptor) {\n    const { id } = descriptor;\n    return {\n        ...descriptor,\n        id: base64URLStringToBuffer(id),\n        transports: descriptor.transports,\n    };\n}\n\nfunction isValidDomain(hostname) {\n    return (hostname === 'localhost' ||\n        /^([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}$/i.test(hostname));\n}\n\nclass WebAuthnError extends Error {\n    constructor({ message, code, cause, name, }) {\n        super(message, { cause });\n        this.name = name ?? cause.name;\n        this.code = code;\n    }\n}\n\nfunction identifyRegistrationError({ error, options, }) {\n    const { publicKey } = options;\n    if (!publicKey) {\n        throw Error('options was missing required publicKey property');\n    }\n    if (error.name === 'AbortError') {\n        if (options.signal instanceof AbortSignal) {\n            return new WebAuthnError({\n                message: 'Registration ceremony was sent an abort signal',\n                code: 'ERROR_CEREMONY_ABORTED',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'ConstraintError') {\n        if (publicKey.authenticatorSelection?.requireResidentKey === true) {\n            return new WebAuthnError({\n                message: 'Discoverable credentials were required but no available authenticator supported it',\n                code: 'ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT',\n                cause: error,\n            });\n        }\n        else if (publicKey.authenticatorSelection?.userVerification === 'required') {\n            return new WebAuthnError({\n                message: 'User verification was required but no available authenticator supported it',\n                code: 'ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'InvalidStateError') {\n        return new WebAuthnError({\n            message: 'The authenticator was previously registered',\n            code: 'ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED',\n            cause: error,\n        });\n    }\n    else if (error.name === 'NotAllowedError') {\n        return new WebAuthnError({\n            message: error.message,\n            code: 'ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY',\n            cause: error,\n        });\n    }\n    else if (error.name === 'NotSupportedError') {\n        const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === 'public-key');\n        if (validPubKeyCredParams.length === 0) {\n            return new WebAuthnError({\n                message: 'No entry in pubKeyCredParams was of type \"public-key\"',\n                code: 'ERROR_MALFORMED_PUBKEYCREDPARAMS',\n                cause: error,\n            });\n        }\n        return new WebAuthnError({\n            message: 'No available authenticator supported any of the specified pubKeyCredParams algorithms',\n            code: 'ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG',\n            cause: error,\n        });\n    }\n    else if (error.name === 'SecurityError') {\n        const effectiveDomain = window.location.hostname;\n        if (!isValidDomain(effectiveDomain)) {\n            return new WebAuthnError({\n                message: `${window.location.hostname} is an invalid domain`,\n                code: 'ERROR_INVALID_DOMAIN',\n                cause: error,\n            });\n        }\n        else if (publicKey.rp.id !== effectiveDomain) {\n            return new WebAuthnError({\n                message: `The RP ID \"${publicKey.rp.id}\" is invalid for this domain`,\n                code: 'ERROR_INVALID_RP_ID',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'TypeError') {\n        if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {\n            return new WebAuthnError({\n                message: 'User ID was not between 1 and 64 characters',\n                code: 'ERROR_INVALID_USER_ID_LENGTH',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'UnknownError') {\n        return new WebAuthnError({\n            message: 'The authenticator was unable to process the specified options, or could not create a new credential',\n            code: 'ERROR_AUTHENTICATOR_GENERAL_ERROR',\n            cause: error,\n        });\n    }\n    return error;\n}\n\nclass BaseWebAuthnAbortService {\n    createNewAbortSignal() {\n        if (this.controller) {\n            const abortError = new Error('Cancelling existing WebAuthn API call for new one');\n            abortError.name = 'AbortError';\n            this.controller.abort(abortError);\n        }\n        const newController = new AbortController();\n        this.controller = newController;\n        return newController.signal;\n    }\n    cancelCeremony() {\n        if (this.controller) {\n            const abortError = new Error('Manually cancelling existing WebAuthn API call');\n            abortError.name = 'AbortError';\n            this.controller.abort(abortError);\n            this.controller = undefined;\n        }\n    }\n}\nconst WebAuthnAbortService = new BaseWebAuthnAbortService();\n\nconst attachments = ['cross-platform', 'platform'];\nfunction toAuthenticatorAttachment(attachment) {\n    if (!attachment) {\n        return;\n    }\n    if (attachments.indexOf(attachment) < 0) {\n        return;\n    }\n    return attachment;\n}\n\nasync function startRegistration(creationOptionsJSON) {\n    if (!browserSupportsWebAuthn()) {\n        throw new Error('WebAuthn is not supported in this browser');\n    }\n    const publicKey = {\n        ...creationOptionsJSON,\n        challenge: base64URLStringToBuffer(creationOptionsJSON.challenge),\n        user: {\n            ...creationOptionsJSON.user,\n            id: utf8StringToBuffer(creationOptionsJSON.user.id),\n        },\n        excludeCredentials: creationOptionsJSON.excludeCredentials?.map(toPublicKeyCredentialDescriptor),\n    };\n    const options = { publicKey };\n    options.signal = WebAuthnAbortService.createNewAbortSignal();\n    let credential;\n    try {\n        credential = (await navigator.credentials.create(options));\n    }\n    catch (err) {\n        throw identifyRegistrationError({ error: err, options });\n    }\n    if (!credential) {\n        throw new Error('Registration was not completed');\n    }\n    const { id, rawId, response, type } = credential;\n    let transports = undefined;\n    if (typeof response.getTransports === 'function') {\n        transports = response.getTransports();\n    }\n    let responsePublicKeyAlgorithm = undefined;\n    if (typeof response.getPublicKeyAlgorithm === 'function') {\n        try {\n            responsePublicKeyAlgorithm = response.getPublicKeyAlgorithm();\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getPublicKeyAlgorithm()', error);\n        }\n    }\n    let responsePublicKey = undefined;\n    if (typeof response.getPublicKey === 'function') {\n        try {\n            const _publicKey = response.getPublicKey();\n            if (_publicKey !== null) {\n                responsePublicKey = bufferToBase64URLString(_publicKey);\n            }\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getPublicKey()', error);\n        }\n    }\n    let responseAuthenticatorData;\n    if (typeof response.getAuthenticatorData === 'function') {\n        try {\n            responseAuthenticatorData = bufferToBase64URLString(response.getAuthenticatorData());\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getAuthenticatorData()', error);\n        }\n    }\n    return {\n        id,\n        rawId: bufferToBase64URLString(rawId),\n        response: {\n            attestationObject: bufferToBase64URLString(response.attestationObject),\n            clientDataJSON: bufferToBase64URLString(response.clientDataJSON),\n            transports,\n            publicKeyAlgorithm: responsePublicKeyAlgorithm,\n            publicKey: responsePublicKey,\n            authenticatorData: responseAuthenticatorData,\n        },\n        type,\n        clientExtensionResults: credential.getClientExtensionResults(),\n        authenticatorAttachment: toAuthenticatorAttachment(credential.authenticatorAttachment),\n    };\n}\nfunction warnOnBrokenImplementation(methodName, cause) {\n    console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${methodName}. You should report this error to them.\\n`, cause);\n}\n\nfunction bufferToUTF8String(value) {\n    return new TextDecoder('utf-8').decode(value);\n}\n\nfunction browserSupportsWebAuthnAutofill() {\n    const globalPublicKeyCredential = window\n        .PublicKeyCredential;\n    if (globalPublicKeyCredential.isConditionalMediationAvailable === undefined) {\n        return new Promise((resolve) => resolve(false));\n    }\n    return globalPublicKeyCredential.isConditionalMediationAvailable();\n}\n\nfunction identifyAuthenticationError({ error, options, }) {\n    const { publicKey } = options;\n    if (!publicKey) {\n        throw Error('options was missing required publicKey property');\n    }\n    if (error.name === 'AbortError') {\n        if (options.signal instanceof AbortSignal) {\n            return new WebAuthnError({\n                message: 'Authentication ceremony was sent an abort signal',\n                code: 'ERROR_CEREMONY_ABORTED',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'NotAllowedError') {\n        return new WebAuthnError({\n            message: error.message,\n            code: 'ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY',\n            cause: error,\n        });\n    }\n    else if (error.name === 'SecurityError') {\n        const effectiveDomain = window.location.hostname;\n        if (!isValidDomain(effectiveDomain)) {\n            return new WebAuthnError({\n                message: `${window.location.hostname} is an invalid domain`,\n                code: 'ERROR_INVALID_DOMAIN',\n                cause: error,\n            });\n        }\n        else if (publicKey.rpId !== effectiveDomain) {\n            return new WebAuthnError({\n                message: `The RP ID \"${publicKey.rpId}\" is invalid for this domain`,\n                code: 'ERROR_INVALID_RP_ID',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'UnknownError') {\n        return new WebAuthnError({\n            message: 'The authenticator was unable to process the specified options, or could not create a new assertion signature',\n            code: 'ERROR_AUTHENTICATOR_GENERAL_ERROR',\n            cause: error,\n        });\n    }\n    return error;\n}\n\nasync function startAuthentication(requestOptionsJSON, useBrowserAutofill = false) {\n    if (!browserSupportsWebAuthn()) {\n        throw new Error('WebAuthn is not supported in this browser');\n    }\n    let allowCredentials;\n    if (requestOptionsJSON.allowCredentials?.length !== 0) {\n        allowCredentials = requestOptionsJSON.allowCredentials?.map(toPublicKeyCredentialDescriptor);\n    }\n    const publicKey = {\n        ...requestOptionsJSON,\n        challenge: base64URLStringToBuffer(requestOptionsJSON.challenge),\n        allowCredentials,\n    };\n    const options = {};\n    if (useBrowserAutofill) {\n        if (!(await browserSupportsWebAuthnAutofill())) {\n            throw Error('Browser does not support WebAuthn autofill');\n        }\n        const eligibleInputs = document.querySelectorAll('input[autocomplete$=\\'webauthn\\']');\n        if (eligibleInputs.length < 1) {\n            throw Error('No <input> with \"webauthn\" as the only or last value in its `autocomplete` attribute was detected');\n        }\n        options.mediation = 'conditional';\n        publicKey.allowCredentials = [];\n    }\n    options.publicKey = publicKey;\n    options.signal = WebAuthnAbortService.createNewAbortSignal();\n    let credential;\n    try {\n        credential = (await navigator.credentials.get(options));\n    }\n    catch (err) {\n        throw identifyAuthenticationError({ error: err, options });\n    }\n    if (!credential) {\n        throw new Error('Authentication was not completed');\n    }\n    const { id, rawId, response, type } = credential;\n    let userHandle = undefined;\n    if (response.userHandle) {\n        userHandle = bufferToUTF8String(response.userHandle);\n    }\n    return {\n        id,\n        rawId: bufferToBase64URLString(rawId),\n        response: {\n            authenticatorData: bufferToBase64URLString(response.authenticatorData),\n            clientDataJSON: bufferToBase64URLString(response.clientDataJSON),\n            signature: bufferToBase64URLString(response.signature),\n            userHandle,\n        },\n        type,\n        clientExtensionResults: credential.getClientExtensionResults(),\n        authenticatorAttachment: toAuthenticatorAttachment(credential.authenticatorAttachment),\n    };\n}\n\nfunction platformAuthenticatorIsAvailable() {\n    if (!browserSupportsWebAuthn()) {\n        return new Promise((resolve) => resolve(false));\n    }\n    return PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXIvZGlzdC9idW5kbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDOztBQUVBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQyx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsaUJBQWlCO0FBQ3RELFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsV0FBVztBQUNySDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsaUJBQWlCO0FBQ3hELFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9jdXJ0aXMvRGVza3RvcC9FVEhfR0xPQkFML25ld3Zlci9ub2RlX21vZHVsZXMvQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXIvZGlzdC9idW5kbGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogW0BzaW1wbGV3ZWJhdXRobi9icm93c2VyQDkuMC4xXSAqL1xuZnVuY3Rpb24gdXRmOFN0cmluZ1RvQnVmZmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKGJ1ZmZlcikge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChjb25zdCBjaGFyQ29kZSBvZiBieXRlcykge1xuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgfVxuICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IGJ0b2Eoc3RyKTtcbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpLnJlcGxhY2UoLz0vZywgJycpO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRVUkxTdHJpbmdUb0J1ZmZlcihiYXNlNjRVUkxTdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVUkxTdHJpbmcucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICBjb25zdCBwYWRMZW5ndGggPSAoNCAtIChiYXNlNjQubGVuZ3RoICUgNCkpICUgNDtcbiAgICBjb25zdCBwYWRkZWQgPSBiYXNlNjQucGFkRW5kKGJhc2U2NC5sZW5ndGggKyBwYWRMZW5ndGgsICc9Jyk7XG4gICAgY29uc3QgYmluYXJ5ID0gYXRvYihwYWRkZWQpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5hcnkubGVuZ3RoKTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYnJvd3NlclN1cHBvcnRzV2ViQXV0aG4oKSB7XG4gICAgcmV0dXJuICh3aW5kb3c/LlB1YmxpY0tleUNyZWRlbnRpYWwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93LlB1YmxpY0tleUNyZWRlbnRpYWwgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiB0b1B1YmxpY0tleUNyZWRlbnRpYWxEZXNjcmlwdG9yKGRlc2NyaXB0b3IpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBkZXNjcmlwdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICAgIGlkOiBiYXNlNjRVUkxTdHJpbmdUb0J1ZmZlcihpZCksXG4gICAgICAgIHRyYW5zcG9ydHM6IGRlc2NyaXB0b3IudHJhbnNwb3J0cyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRG9tYWluKGhvc3RuYW1lKSB7XG4gICAgcmV0dXJuIChob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAgICAgL14oW2EtejAtOV0rKC1bYS16MC05XSspKlxcLikrW2Etel17Mix9JC9pLnRlc3QoaG9zdG5hbWUpKTtcbn1cblxuY2xhc3MgV2ViQXV0aG5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG1lc3NhZ2UsIGNvZGUsIGNhdXNlLCBuYW1lLCB9KSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIHsgY2F1c2UgfSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPz8gY2F1c2UubmFtZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZ5UmVnaXN0cmF0aW9uRXJyb3IoeyBlcnJvciwgb3B0aW9ucywgfSkge1xuICAgIGNvbnN0IHsgcHVibGljS2V5IH0gPSBvcHRpb25zO1xuICAgIGlmICghcHVibGljS2V5KSB7XG4gICAgICAgIHRocm93IEVycm9yKCdvcHRpb25zIHdhcyBtaXNzaW5nIHJlcXVpcmVkIHB1YmxpY0tleSBwcm9wZXJ0eScpO1xuICAgIH1cbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnNpZ25hbCBpbnN0YW5jZW9mIEFib3J0U2lnbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWdpc3RyYXRpb24gY2VyZW1vbnkgd2FzIHNlbnQgYW4gYWJvcnQgc2lnbmFsJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfQ0VSRU1PTllfQUJPUlRFRCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ0NvbnN0cmFpbnRFcnJvcicpIHtcbiAgICAgICAgaWYgKHB1YmxpY0tleS5hdXRoZW50aWNhdG9yU2VsZWN0aW9uPy5yZXF1aXJlUmVzaWRlbnRLZXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Rpc2NvdmVyYWJsZSBjcmVkZW50aWFscyB3ZXJlIHJlcXVpcmVkIGJ1dCBubyBhdmFpbGFibGUgYXV0aGVudGljYXRvciBzdXBwb3J0ZWQgaXQnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9BVVRIRU5USUNBVE9SX01JU1NJTkdfRElTQ09WRVJBQkxFX0NSRURFTlRJQUxfU1VQUE9SVCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHVibGljS2V5LmF1dGhlbnRpY2F0b3JTZWxlY3Rpb24/LnVzZXJWZXJpZmljYXRpb24gPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpY2F0aW9uIHdhcyByZXF1aXJlZCBidXQgbm8gYXZhaWxhYmxlIGF1dGhlbnRpY2F0b3Igc3VwcG9ydGVkIGl0JyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfQVVUSEVOVElDQVRPUl9NSVNTSU5HX1VTRVJfVkVSSUZJQ0FUSU9OX1NVUFBPUlQnLFxuICAgICAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdJbnZhbGlkU3RhdGVFcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgYXV0aGVudGljYXRvciB3YXMgcHJldmlvdXNseSByZWdpc3RlcmVkJyxcbiAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9BVVRIRU5USUNBVE9SX1BSRVZJT1VTTFlfUkVHSVNURVJFRCcsXG4gICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9QQVNTVEhST1VHSF9TRUVfQ0FVU0VfUFJPUEVSVFknLFxuICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ05vdFN1cHBvcnRlZEVycm9yJykge1xuICAgICAgICBjb25zdCB2YWxpZFB1YktleUNyZWRQYXJhbXMgPSBwdWJsaWNLZXkucHViS2V5Q3JlZFBhcmFtcy5maWx0ZXIoKHBhcmFtKSA9PiBwYXJhbS50eXBlID09PSAncHVibGljLWtleScpO1xuICAgICAgICBpZiAodmFsaWRQdWJLZXlDcmVkUGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gZW50cnkgaW4gcHViS2V5Q3JlZFBhcmFtcyB3YXMgb2YgdHlwZSBcInB1YmxpYy1rZXlcIicsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX01BTEZPUk1FRF9QVUJLRVlDUkVEUEFSQU1TJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogJ05vIGF2YWlsYWJsZSBhdXRoZW50aWNhdG9yIHN1cHBvcnRlZCBhbnkgb2YgdGhlIHNwZWNpZmllZCBwdWJLZXlDcmVkUGFyYW1zIGFsZ29yaXRobXMnLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX0FVVEhFTlRJQ0FUT1JfTk9fU1VQUE9SVEVEX1BVQktFWUNSRURQQVJBTVNfQUxHJyxcbiAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdTZWN1cml0eUVycm9yJykge1xuICAgICAgICBjb25zdCBlZmZlY3RpdmVEb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgIGlmICghaXNWYWxpZERvbWFpbihlZmZlY3RpdmVEb21haW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0gaXMgYW4gaW52YWxpZCBkb21haW5gLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9JTlZBTElEX0RPTUFJTicsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHVibGljS2V5LnJwLmlkICE9PSBlZmZlY3RpdmVEb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFRoZSBSUCBJRCBcIiR7cHVibGljS2V5LnJwLmlkfVwiIGlzIGludmFsaWQgZm9yIHRoaXMgZG9tYWluYCxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfSU5WQUxJRF9SUF9JRCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgaWYgKHB1YmxpY0tleS51c2VyLmlkLmJ5dGVMZW5ndGggPCAxIHx8IHB1YmxpY0tleS51c2VyLmlkLmJ5dGVMZW5ndGggPiA2NCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBJRCB3YXMgbm90IGJldHdlZW4gMSBhbmQgNjQgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX0lOVkFMSURfVVNFUl9JRF9MRU5HVEgnLFxuICAgICAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdVbmtub3duRXJyb3InKSB7XG4gICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGF1dGhlbnRpY2F0b3Igd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBzcGVjaWZpZWQgb3B0aW9ucywgb3IgY291bGQgbm90IGNyZWF0ZSBhIG5ldyBjcmVkZW50aWFsJyxcbiAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9BVVRIRU5USUNBVE9SX0dFTkVSQUxfRVJST1InLFxuICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG5jbGFzcyBCYXNlV2ViQXV0aG5BYm9ydFNlcnZpY2Uge1xuICAgIGNyZWF0ZU5ld0Fib3J0U2lnbmFsKCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKCdDYW5jZWxsaW5nIGV4aXN0aW5nIFdlYkF1dGhuIEFQSSBjYWxsIGZvciBuZXcgb25lJyk7XG4gICAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSAnQWJvcnRFcnJvcic7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoYWJvcnRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3Q29udHJvbGxlcjtcbiAgICAgICAgcmV0dXJuIG5ld0NvbnRyb2xsZXIuc2lnbmFsO1xuICAgIH1cbiAgICBjYW5jZWxDZXJlbW9ueSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcignTWFudWFsbHkgY2FuY2VsbGluZyBleGlzdGluZyBXZWJBdXRobiBBUEkgY2FsbCcpO1xuICAgICAgICAgICAgYWJvcnRFcnJvci5uYW1lID0gJ0Fib3J0RXJyb3InO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmFib3J0KGFib3J0RXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgV2ViQXV0aG5BYm9ydFNlcnZpY2UgPSBuZXcgQmFzZVdlYkF1dGhuQWJvcnRTZXJ2aWNlKCk7XG5cbmNvbnN0IGF0dGFjaG1lbnRzID0gWydjcm9zcy1wbGF0Zm9ybScsICdwbGF0Zm9ybSddO1xuZnVuY3Rpb24gdG9BdXRoZW50aWNhdG9yQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKCFhdHRhY2htZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCkgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVnaXN0cmF0aW9uKGNyZWF0aW9uT3B0aW9uc0pTT04pIHtcbiAgICBpZiAoIWJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJBdXRobiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICBjb25zdCBwdWJsaWNLZXkgPSB7XG4gICAgICAgIC4uLmNyZWF0aW9uT3B0aW9uc0pTT04sXG4gICAgICAgIGNoYWxsZW5nZTogYmFzZTY0VVJMU3RyaW5nVG9CdWZmZXIoY3JlYXRpb25PcHRpb25zSlNPTi5jaGFsbGVuZ2UpLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAuLi5jcmVhdGlvbk9wdGlvbnNKU09OLnVzZXIsXG4gICAgICAgICAgICBpZDogdXRmOFN0cmluZ1RvQnVmZmVyKGNyZWF0aW9uT3B0aW9uc0pTT04udXNlci5pZCksXG4gICAgICAgIH0sXG4gICAgICAgIGV4Y2x1ZGVDcmVkZW50aWFsczogY3JlYXRpb25PcHRpb25zSlNPTi5leGNsdWRlQ3JlZGVudGlhbHM/Lm1hcCh0b1B1YmxpY0tleUNyZWRlbnRpYWxEZXNjcmlwdG9yKSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHB1YmxpY0tleSB9O1xuICAgIG9wdGlvbnMuc2lnbmFsID0gV2ViQXV0aG5BYm9ydFNlcnZpY2UuY3JlYXRlTmV3QWJvcnRTaWduYWwoKTtcbiAgICBsZXQgY3JlZGVudGlhbDtcbiAgICB0cnkge1xuICAgICAgICBjcmVkZW50aWFsID0gKGF3YWl0IG5hdmlnYXRvci5jcmVkZW50aWFscy5jcmVhdGUob3B0aW9ucykpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IGlkZW50aWZ5UmVnaXN0cmF0aW9uRXJyb3IoeyBlcnJvcjogZXJyLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBpZiAoIWNyZWRlbnRpYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWdpc3RyYXRpb24gd2FzIG5vdCBjb21wbGV0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgeyBpZCwgcmF3SWQsIHJlc3BvbnNlLCB0eXBlIH0gPSBjcmVkZW50aWFsO1xuICAgIGxldCB0cmFuc3BvcnRzID0gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZ2V0VHJhbnNwb3J0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cmFuc3BvcnRzID0gcmVzcG9uc2UuZ2V0VHJhbnNwb3J0cygpO1xuICAgIH1cbiAgICBsZXQgcmVzcG9uc2VQdWJsaWNLZXlBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiByZXNwb25zZS5nZXRQdWJsaWNLZXlBbGdvcml0aG0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHVibGljS2V5QWxnb3JpdGhtID0gcmVzcG9uc2UuZ2V0UHVibGljS2V5QWxnb3JpdGhtKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB3YXJuT25Ccm9rZW5JbXBsZW1lbnRhdGlvbignZ2V0UHVibGljS2V5QWxnb3JpdGhtKCknLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3BvbnNlUHVibGljS2V5ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZ2V0UHVibGljS2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBfcHVibGljS2V5ID0gcmVzcG9uc2UuZ2V0UHVibGljS2V5KCk7XG4gICAgICAgICAgICBpZiAoX3B1YmxpY0tleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlUHVibGljS2V5ID0gYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcoX3B1YmxpY0tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB3YXJuT25Ccm9rZW5JbXBsZW1lbnRhdGlvbignZ2V0UHVibGljS2V5KCknLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3BvbnNlQXV0aGVudGljYXRvckRhdGE7XG4gICAgaWYgKHR5cGVvZiByZXNwb25zZS5nZXRBdXRoZW50aWNhdG9yRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2VBdXRoZW50aWNhdG9yRGF0YSA9IGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKHJlc3BvbnNlLmdldEF1dGhlbnRpY2F0b3JEYXRhKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgd2Fybk9uQnJva2VuSW1wbGVtZW50YXRpb24oJ2dldEF1dGhlbnRpY2F0b3JEYXRhKCknLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHJhd0lkOiBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhyYXdJZCksXG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICBhdHRlc3RhdGlvbk9iamVjdDogYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2UuYXR0ZXN0YXRpb25PYmplY3QpLFxuICAgICAgICAgICAgY2xpZW50RGF0YUpTT046IGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKHJlc3BvbnNlLmNsaWVudERhdGFKU09OKSxcbiAgICAgICAgICAgIHRyYW5zcG9ydHMsXG4gICAgICAgICAgICBwdWJsaWNLZXlBbGdvcml0aG06IHJlc3BvbnNlUHVibGljS2V5QWxnb3JpdGhtLFxuICAgICAgICAgICAgcHVibGljS2V5OiByZXNwb25zZVB1YmxpY0tleSxcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0b3JEYXRhOiByZXNwb25zZUF1dGhlbnRpY2F0b3JEYXRhLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlLFxuICAgICAgICBjbGllbnRFeHRlbnNpb25SZXN1bHRzOiBjcmVkZW50aWFsLmdldENsaWVudEV4dGVuc2lvblJlc3VsdHMoKSxcbiAgICAgICAgYXV0aGVudGljYXRvckF0dGFjaG1lbnQ6IHRvQXV0aGVudGljYXRvckF0dGFjaG1lbnQoY3JlZGVudGlhbC5hdXRoZW50aWNhdG9yQXR0YWNobWVudCksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdhcm5PbkJyb2tlbkltcGxlbWVudGF0aW9uKG1ldGhvZE5hbWUsIGNhdXNlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgYnJvd3NlciBleHRlbnNpb24gdGhhdCBpbnRlcmNlcHRlZCB0aGlzIFdlYkF1dGhuIEFQSSBjYWxsIGluY29ycmVjdGx5IGltcGxlbWVudGVkICR7bWV0aG9kTmFtZX0uIFlvdSBzaG91bGQgcmVwb3J0IHRoaXMgZXJyb3IgdG8gdGhlbS5cXG5gLCBjYXVzZSk7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlclRvVVRGOFN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYnJvd3NlclN1cHBvcnRzV2ViQXV0aG5BdXRvZmlsbCgpIHtcbiAgICBjb25zdCBnbG9iYWxQdWJsaWNLZXlDcmVkZW50aWFsID0gd2luZG93XG4gICAgICAgIC5QdWJsaWNLZXlDcmVkZW50aWFsO1xuICAgIGlmIChnbG9iYWxQdWJsaWNLZXlDcmVkZW50aWFsLmlzQ29uZGl0aW9uYWxNZWRpYXRpb25BdmFpbGFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoZmFsc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIGdsb2JhbFB1YmxpY0tleUNyZWRlbnRpYWwuaXNDb25kaXRpb25hbE1lZGlhdGlvbkF2YWlsYWJsZSgpO1xufVxuXG5mdW5jdGlvbiBpZGVudGlmeUF1dGhlbnRpY2F0aW9uRXJyb3IoeyBlcnJvciwgb3B0aW9ucywgfSkge1xuICAgIGNvbnN0IHsgcHVibGljS2V5IH0gPSBvcHRpb25zO1xuICAgIGlmICghcHVibGljS2V5KSB7XG4gICAgICAgIHRocm93IEVycm9yKCdvcHRpb25zIHdhcyBtaXNzaW5nIHJlcXVpcmVkIHB1YmxpY0tleSBwcm9wZXJ0eScpO1xuICAgIH1cbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnNpZ25hbCBpbnN0YW5jZW9mIEFib3J0U2lnbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBdXRoZW50aWNhdGlvbiBjZXJlbW9ueSB3YXMgc2VudCBhbiBhYm9ydCBzaWduYWwnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9DRVJFTU9OWV9BQk9SVEVEJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9QQVNTVEhST1VHSF9TRUVfQ0FVU0VfUFJPUEVSVFknLFxuICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1NlY3VyaXR5RXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZURvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRG9tYWluKGVmZmVjdGl2ZURvbWFpbikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSBpcyBhbiBpbnZhbGlkIGRvbWFpbmAsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX0lOVkFMSURfRE9NQUlOJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwdWJsaWNLZXkucnBJZCAhPT0gZWZmZWN0aXZlRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBUaGUgUlAgSUQgXCIke3B1YmxpY0tleS5ycElkfVwiIGlzIGludmFsaWQgZm9yIHRoaXMgZG9tYWluYCxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfSU5WQUxJRF9SUF9JRCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1Vua25vd25FcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgYXV0aGVudGljYXRvciB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIHNwZWNpZmllZCBvcHRpb25zLCBvciBjb3VsZCBub3QgY3JlYXRlIGEgbmV3IGFzc2VydGlvbiBzaWduYXR1cmUnLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX0FVVEhFTlRJQ0FUT1JfR0VORVJBTF9FUlJPUicsXG4gICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0QXV0aGVudGljYXRpb24ocmVxdWVzdE9wdGlvbnNKU09OLCB1c2VCcm93c2VyQXV0b2ZpbGwgPSBmYWxzZSkge1xuICAgIGlmICghYnJvd3NlclN1cHBvcnRzV2ViQXV0aG4oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkF1dGhuIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICAgIGxldCBhbGxvd0NyZWRlbnRpYWxzO1xuICAgIGlmIChyZXF1ZXN0T3B0aW9uc0pTT04uYWxsb3dDcmVkZW50aWFscz8ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGFsbG93Q3JlZGVudGlhbHMgPSByZXF1ZXN0T3B0aW9uc0pTT04uYWxsb3dDcmVkZW50aWFscz8ubWFwKHRvUHVibGljS2V5Q3JlZGVudGlhbERlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBwdWJsaWNLZXkgPSB7XG4gICAgICAgIC4uLnJlcXVlc3RPcHRpb25zSlNPTixcbiAgICAgICAgY2hhbGxlbmdlOiBiYXNlNjRVUkxTdHJpbmdUb0J1ZmZlcihyZXF1ZXN0T3B0aW9uc0pTT04uY2hhbGxlbmdlKSxcbiAgICAgICAgYWxsb3dDcmVkZW50aWFscyxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICBpZiAodXNlQnJvd3NlckF1dG9maWxsKSB7XG4gICAgICAgIGlmICghKGF3YWl0IGJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuQXV0b2ZpbGwoKSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViQXV0aG4gYXV0b2ZpbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGlnaWJsZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2F1dG9jb21wbGV0ZSQ9XFwnd2ViYXV0aG5cXCddJyk7XG4gICAgICAgIGlmIChlbGlnaWJsZUlucHV0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gPGlucHV0PiB3aXRoIFwid2ViYXV0aG5cIiBhcyB0aGUgb25seSBvciBsYXN0IHZhbHVlIGluIGl0cyBgYXV0b2NvbXBsZXRlYCBhdHRyaWJ1dGUgd2FzIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5tZWRpYXRpb24gPSAnY29uZGl0aW9uYWwnO1xuICAgICAgICBwdWJsaWNLZXkuYWxsb3dDcmVkZW50aWFscyA9IFtdO1xuICAgIH1cbiAgICBvcHRpb25zLnB1YmxpY0tleSA9IHB1YmxpY0tleTtcbiAgICBvcHRpb25zLnNpZ25hbCA9IFdlYkF1dGhuQWJvcnRTZXJ2aWNlLmNyZWF0ZU5ld0Fib3J0U2lnbmFsKCk7XG4gICAgbGV0IGNyZWRlbnRpYWw7XG4gICAgdHJ5IHtcbiAgICAgICAgY3JlZGVudGlhbCA9IChhd2FpdCBuYXZpZ2F0b3IuY3JlZGVudGlhbHMuZ2V0KG9wdGlvbnMpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBpZGVudGlmeUF1dGhlbnRpY2F0aW9uRXJyb3IoeyBlcnJvcjogZXJyLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBpZiAoIWNyZWRlbnRpYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiB3YXMgbm90IGNvbXBsZXRlZCcpO1xuICAgIH1cbiAgICBjb25zdCB7IGlkLCByYXdJZCwgcmVzcG9uc2UsIHR5cGUgfSA9IGNyZWRlbnRpYWw7XG4gICAgbGV0IHVzZXJIYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHJlc3BvbnNlLnVzZXJIYW5kbGUpIHtcbiAgICAgICAgdXNlckhhbmRsZSA9IGJ1ZmZlclRvVVRGOFN0cmluZyhyZXNwb25zZS51c2VySGFuZGxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHJhd0lkOiBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhyYXdJZCksXG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICBhdXRoZW50aWNhdG9yRGF0YTogYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2UuYXV0aGVudGljYXRvckRhdGEpLFxuICAgICAgICAgICAgY2xpZW50RGF0YUpTT046IGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKHJlc3BvbnNlLmNsaWVudERhdGFKU09OKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2Uuc2lnbmF0dXJlKSxcbiAgICAgICAgICAgIHVzZXJIYW5kbGUsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNsaWVudEV4dGVuc2lvblJlc3VsdHM6IGNyZWRlbnRpYWwuZ2V0Q2xpZW50RXh0ZW5zaW9uUmVzdWx0cygpLFxuICAgICAgICBhdXRoZW50aWNhdG9yQXR0YWNobWVudDogdG9BdXRoZW50aWNhdG9yQXR0YWNobWVudChjcmVkZW50aWFsLmF1dGhlbnRpY2F0b3JBdHRhY2htZW50KSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBwbGF0Zm9ybUF1dGhlbnRpY2F0b3JJc0F2YWlsYWJsZSgpIHtcbiAgICBpZiAoIWJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuKCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKGZhbHNlKSk7XG4gICAgfVxuICAgIHJldHVybiBQdWJsaWNLZXlDcmVkZW50aWFsLmlzVXNlclZlcmlmeWluZ1BsYXRmb3JtQXV0aGVudGljYXRvckF2YWlsYWJsZSgpO1xufVxuXG5leHBvcnQgeyBXZWJBdXRobkFib3J0U2VydmljZSwgV2ViQXV0aG5FcnJvciwgYmFzZTY0VVJMU3RyaW5nVG9CdWZmZXIsIGJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuLCBicm93c2VyU3VwcG9ydHNXZWJBdXRobkF1dG9maWxsLCBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZywgcGxhdGZvcm1BdXRoZW50aWNhdG9ySXNBdmFpbGFibGUsIHN0YXJ0QXV0aGVudGljYXRpb24sIHN0YXJ0UmVnaXN0cmF0aW9uIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@simplewebauthn/browser/dist/bundle/index.js\n");

/***/ })

};
;