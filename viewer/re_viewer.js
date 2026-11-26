let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    class IntoUnderlyingByteSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingByteSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
        }
        /**
         * @returns {number}
         */
        get autoAllocateChunkSize() {
            const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
            return ret >>> 0;
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingbytesource_cancel(ptr);
        }
        /**
         * @param {ReadableByteStreamController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, controller);
            return ret;
        }
        /**
         * @param {ReadableByteStreamController} controller
         */
        start(controller) {
            wasm.intounderlyingbytesource_start(this.__wbg_ptr, controller);
        }
        /**
         * @returns {ReadableStreamType}
         */
        get type() {
            const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
            return __wbindgen_enum_ReadableStreamType[ret];
        }
    }
    if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;
    exports.IntoUnderlyingByteSource = IntoUnderlyingByteSource;

    class IntoUnderlyingSink {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSinkFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsink_free(ptr, 0);
        }
        /**
         * @param {any} reason
         * @returns {Promise<any>}
         */
        abort(reason) {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_abort(ptr, reason);
            return ret;
        }
        /**
         * @returns {Promise<any>}
         */
        close() {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_close(ptr);
            return ret;
        }
        /**
         * @param {any} chunk
         * @returns {Promise<any>}
         */
        write(chunk) {
            const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
            return ret;
        }
    }
    if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;
    exports.IntoUnderlyingSink = IntoUnderlyingSink;

    class IntoUnderlyingSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsource_free(ptr, 0);
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingsource_cancel(ptr);
        }
        /**
         * @param {ReadableStreamDefaultController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
            return ret;
        }
    }
    if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;
    exports.IntoUnderlyingSource = IntoUnderlyingSource;

    class WebHandle {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            WebHandleFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_webhandle_free(ptr, 0);
        }
        /**
         * Add a new receiver streaming data from the given url.
         *
         * Websocket streams are always opened in `Following` mode.
         *
         * It is an error to open a channel twice with the same id.
         * @param {string} url
         */
        add_receiver(url) {
            const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.webhandle_add_receiver(this.__wbg_ptr, ptr0, len0);
        }
        /**
         * Close an existing channel for streaming data.
         *
         * No-op if the channel is already closed.
         * @param {string} id
         */
        close_channel(id) {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.webhandle_close_channel(this.__wbg_ptr, ptr0, len0);
        }
        destroy() {
            wasm.webhandle_destroy(this.__wbg_ptr);
        }
        /**
         * @returns {boolean}
         */
        has_panicked() {
            const ret = wasm.webhandle_has_panicked(this.__wbg_ptr);
            return ret !== 0;
        }
        /**
         * Handle an encoded `egui_inspection` request.
         * @param {Uint8Array} request_bytes
         * @returns {Promise<Uint8Array>}
         */
        inspect(request_bytes) {
            const ptr0 = passArray8ToWasm0(request_bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.webhandle_inspect(this.__wbg_ptr, ptr0, len0);
            return ret;
        }
        /**
         * @param {any} app_options
         */
        constructor(app_options) {
            const ret = wasm.webhandle_new(app_options);
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            this.__wbg_ptr = ret[0];
            WebHandleFinalization.register(this, this.__wbg_ptr, this);
            return this;
        }
        /**
         * Open a new channel for streaming data.
         *
         * It is an error to open a channel twice with the same id.
         * @param {string} id
         * @param {string} channel_name
         */
        open_channel(id, channel_name) {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(channel_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.webhandle_open_channel(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        }
        /**
         * @param {string} panel
         * @param {string | null} [state]
         */
        override_panel_state(panel, state) {
            const ptr0 = passStringToWasm0(panel, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(state) ? 0 : passStringToWasm0(state, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            const ret = wasm.webhandle_override_panel_state(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            if (ret[1]) {
                throw takeFromExternrefTable0(ret[0]);
            }
        }
        /**
         * @returns {string | undefined}
         */
        panic_callstack() {
            const ret = wasm.webhandle_panic_callstack(this.__wbg_ptr);
            let v1;
            if (ret[0] !== 0) {
                v1 = getStringFromWasm0(ret[0], ret[1]);
                wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            }
            return v1;
        }
        /**
         * @returns {string | undefined}
         */
        panic_message() {
            const ret = wasm.webhandle_panic_message(this.__wbg_ptr);
            let v1;
            if (ret[0] !== 0) {
                v1 = getStringFromWasm0(ret[0], ret[1]);
                wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            }
            return v1;
        }
        /**
         * Encode the active blueprint as RRD data.
         * @returns {Uint8Array}
         */
        save_blueprint() {
            const ret = wasm.webhandle_save_blueprint(this.__wbg_ptr);
            if (ret[3]) {
                throw takeFromExternrefTable0(ret[2]);
            }
            var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            return v1;
        }
        /**
         * Encode the active recording as RRD data.
         * @returns {Uint8Array}
         */
        save_recording() {
            const ret = wasm.webhandle_save_recording(this.__wbg_ptr);
            if (ret[3]) {
                throw takeFromExternrefTable0(ret[2]);
            }
            var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            return v1;
        }
        /**
         * Add an rrd to the viewer directly from a byte array.
         * @param {string} id
         * @param {Uint8Array} data
         */
        send_rrd_to_channel(id, data) {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.webhandle_send_rrd_to_channel(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        }
        /**
         * @param {string} id
         * @param {Uint8Array} data
         */
        send_table_to_channel(id, data) {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.webhandle_send_table_to_channel(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        }
        /**
         * @param {string} access_token
         * @param {string} email
         */
        set_credentials(access_token, email) {
            const ptr0 = passStringToWasm0(access_token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(email, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.webhandle_set_credentials(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        }
        /**
         * @param {any} canvas
         * @returns {Promise<void>}
         */
        start(canvas) {
            const ret = wasm.webhandle_start(this.__wbg_ptr, canvas);
            return ret;
        }
        /**
         * @param {boolean | null} [value]
         */
        toggle_panel_overrides(value) {
            wasm.webhandle_toggle_panel_overrides(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
        }
        /**
         * Perform one operation of the [`ViewerControlService`] API, defined by `viewer_control.proto`.
         *
         * Takes an encoded [`ViewerControlRequest`], and resolves to the encoded
         * [`ViewerControlResponse`].
         * A failed operation rejects with an `Error` named `ViewerControlError`, whose `code` property
         * is the gRPC status code of the failure, e.g. `NOT_FOUND`.
         *
         * Not an `async fn`: that would borrow `self` until the viewer answers, and every `&mut self`
         * method, like `open_channel`, would fail while a request is pending.
         *
         * [`ViewerControlService`]: re_protos::viewer_control::v1alpha1::viewer_control_service_server::ViewerControlService
         * [`ViewerControlRequest`]: re_protos::viewer_control::v1alpha1::ViewerControlRequest
         * [`ViewerControlResponse`]: re_protos::viewer_control::v1alpha1::ViewerControlResponse
         * @param {Uint8Array} request_bytes
         * @returns {Promise<Uint8Array>}
         */
        viewer_control(request_bytes) {
            const ptr0 = passArray8ToWasm0(request_bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.webhandle_viewer_control(this.__wbg_ptr, ptr0, len0);
            return ret;
        }
        /**
         * The encoded `GetStateResponse` of the Viewer Control API, computed right away.
         *
         * Unlike [`Self::viewer_control`], this doesn't wait for the next frame,
         * so it can back synchronous JS APIs.
         * @returns {Uint8Array}
         */
        viewer_state() {
            const ret = wasm.webhandle_viewer_state(this.__wbg_ptr);
            if (ret[3]) {
                throw takeFromExternrefTable0(ret[2]);
            }
            var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            return v1;
        }
    }
    if (Symbol.dispose) WebHandle.prototype[Symbol.dispose] = WebHandle.prototype.free;
    exports.WebHandle = WebHandle;

    /**
     * Used to set the "email" property in the analytics config,
     * in the same way as `rerun analytics email YOURNAME@rerun.io`.
     *
     * This one just panics when it fails, as it's only ever really run
     * by rerun employees manually in `app.rerun.io`.
     * @param {string} email
     */
    function set_email(email) {
        const ptr0 = passStringToWasm0(email, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.set_email(ptr0, len0);
    }
    exports.set_email = set_email;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function(arg0, arg1) {
                const ret = Error(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_Number_14af1003b8dd5ead: function(arg0) {
                const ret = Number(arg0);
                return ret;
            },
            __wbg_Window_afcc911b2f9c92e2: function(arg0) {
                const ret = arg0.Window;
                return ret;
            },
            __wbg_WorkerGlobalScope_5d19ebc889ff397e: function(arg0) {
                const ret = arg0.WorkerGlobalScope;
                return ret;
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function(arg0) {
                const v = arg0;
                const ret = typeof(v) === 'boolean' ? v : undefined;
                return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function(arg0, arg1) {
                const ret = arg0 in arg1;
                return ret;
            },
            __wbg___wbindgen_is_falsy_16bd49b68658263e: function(arg0) {
                const ret = !arg0;
                return ret;
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(arg0) {
                const ret = typeof(arg0) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_null_e343b7d08827ba72: function(arg0) {
                const ret = arg0 === null;
                return ret;
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function(arg0) {
                const val = arg0;
                const ret = typeof(val) === 'object' && val !== null;
                return ret;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(arg0) {
                const ret = typeof(arg0) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function(arg0, arg1) {
                const ret = arg0 == arg1;
                return ret;
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'number' ? obj : undefined;
                getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_dcc1a90847f04c41: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_abort_334e7f918b7c5047: function(arg0, arg1) {
                arg0.abort(arg1);
            },
            __wbg_abort_b46650b76e524767: function(arg0) {
                const ret = arg0.abort();
                return ret;
            },
            __wbg_abort_f78b99d80248bacb: function(arg0) {
                arg0.abort();
            },
            __wbg_activeElement_1e45e0df6b6ac829: function(arg0) {
                const ret = arg0.activeElement;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_activeElement_69b55e3697f14d9b: function(arg0) {
                const ret = arg0.activeElement;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_activeTexture_11079673eac5c921: function(arg0, arg1) {
                arg0.activeTexture(arg1 >>> 0);
            },
            __wbg_activeTexture_2fad46c01cafe6b1: function(arg0, arg1) {
                arg0.activeTexture(arg1 >>> 0);
            },
            __wbg_actualBoundingBoxAscent_22b578b4a72234d9: function(arg0) {
                const ret = arg0.actualBoundingBoxAscent;
                return ret;
            },
            __wbg_actualBoundingBoxDescent_dfaf3fa19c2134c9: function(arg0) {
                const ret = arg0.actualBoundingBoxDescent;
                return ret;
            },
            __wbg_actualBoundingBoxLeft_ae854aa150ab3337: function(arg0) {
                const ret = arg0.actualBoundingBoxLeft;
                return ret;
            },
            __wbg_actualBoundingBoxRight_24f83b7f4b2e642b: function(arg0) {
                const ret = arg0.actualBoundingBoxRight;
                return ret;
            },
            __wbg_addEventListener_2fca777dff9cfa1d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4 !== 0);
            }, arguments); },
            __wbg_addEventListener_4d0db17c671ea324: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_addEventListener_8d3235978b9c69a8: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4);
            }, arguments); },
            __wbg_altKey_1e5fe17a42050103: function(arg0) {
                const ret = arg0.altKey;
                return ret;
            },
            __wbg_altKey_cfb4c4fab9a7d0d0: function(arg0) {
                const ret = arg0.altKey;
                return ret;
            },
            __wbg_appendChild_fb8c52e7dd8484ea: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.appendChild(arg1);
                return ret;
            }, arguments); },
            __wbg_append_1938ed58fb5613b8: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_append_1e9e3768bd52da3e: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            },
            __wbg_append_627a9b311ac9993b: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.append(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_append_9b7024062a618f5d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_append_cfa1814e91387699: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.append(getStringFromWasm0(arg1, arg2), arg3, getStringFromWasm0(arg4, arg5));
            }, arguments); },
            __wbg_arrayBuffer_0fe6e1300abcf908: function(arg0) {
                const ret = arg0.arrayBuffer();
                return ret;
            },
            __wbg_arrayBuffer_f07be74819944ea2: function() { return handleError(function (arg0) {
                const ret = arg0.arrayBuffer();
                return ret;
            }, arguments); },
            __wbg_assign_02ce1efa4c15043f: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.assign(getStringFromWasm0(arg1, arg2));
            }, arguments); },
            __wbg_at_31a66e62eefd72ad: function(arg0, arg1) {
                const ret = arg0.at(arg1);
                return ret;
            },
            __wbg_attachShader_8920a5beea54aba7: function(arg0, arg1, arg2) {
                arg0.attachShader(arg1, arg2);
            },
            __wbg_attachShader_9567ae57af6746d5: function(arg0, arg1, arg2) {
                arg0.attachShader(arg1, arg2);
            },
            __wbg_back_3fe9f0b5102d8eb1: function() { return handleError(function (arg0) {
                arg0.back();
            }, arguments); },
            __wbg_beginQuery_eaee271e7ccd67d1: function(arg0, arg1, arg2) {
                arg0.beginQuery(arg1 >>> 0, arg2);
            },
            __wbg_beginRenderPass_aa22c432e793359a: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.beginRenderPass(arg1);
                return ret;
            }, arguments); },
            __wbg_bindAttribLocation_6a6f66cbe96ef24e: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
            },
            __wbg_bindAttribLocation_ade0ee986a734cdf: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
            },
            __wbg_bindBufferRange_a5aef3642afdabc8: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.bindBufferRange(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
            },
            __wbg_bindBuffer_0324f62b876c4403: function(arg0, arg1, arg2) {
                arg0.bindBuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindBuffer_2195e89b585ce0c3: function(arg0, arg1, arg2) {
                arg0.bindBuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindFramebuffer_22e4b8e6e6d8d0e8: function(arg0, arg1, arg2) {
                arg0.bindFramebuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindFramebuffer_378eb18ef219d37a: function(arg0, arg1, arg2) {
                arg0.bindFramebuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindRenderbuffer_db090531fb28de34: function(arg0, arg1, arg2) {
                arg0.bindRenderbuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindRenderbuffer_e0c5aeef245a913a: function(arg0, arg1, arg2) {
                arg0.bindRenderbuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindSampler_9b9743706aee71d1: function(arg0, arg1, arg2) {
                arg0.bindSampler(arg1 >>> 0, arg2);
            },
            __wbg_bindTexture_3cf008f256f3ed99: function(arg0, arg1, arg2) {
                arg0.bindTexture(arg1 >>> 0, arg2);
            },
            __wbg_bindTexture_613a47b8917a0ccd: function(arg0, arg1, arg2) {
                arg0.bindTexture(arg1 >>> 0, arg2);
            },
            __wbg_bindVertexArrayOES_3141815cb8234a6e: function(arg0, arg1) {
                arg0.bindVertexArrayOES(arg1);
            },
            __wbg_bindVertexArray_f58af0a346185ec5: function(arg0, arg1) {
                arg0.bindVertexArray(arg1);
            },
            __wbg_blendColor_68fc6d6454f2128d: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.blendColor(arg1, arg2, arg3, arg4);
            },
            __wbg_blendColor_a6256f41d1925899: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.blendColor(arg1, arg2, arg3, arg4);
            },
            __wbg_blendEquationSeparate_0a17fa4ea863d445: function(arg0, arg1, arg2) {
                arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_blendEquationSeparate_fa2d4e5dde5ad8b3: function(arg0, arg1, arg2) {
                arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_blendEquation_5fb8aee6a55cf900: function(arg0, arg1) {
                arg0.blendEquation(arg1 >>> 0);
            },
            __wbg_blendEquation_d21914e937b14896: function(arg0, arg1) {
                arg0.blendEquation(arg1 >>> 0);
            },
            __wbg_blendFuncSeparate_28abe082febb1a26: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_blendFuncSeparate_2af9d47f7efc0452: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_blendFunc_491ee1105079ce76: function(arg0, arg1, arg2) {
                arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_blendFunc_589e4252bb396484: function(arg0, arg1, arg2) {
                arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_blitFramebuffer_7b39bfec6cfece56: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
                arg0.blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
            },
            __wbg_blockSize_1e07d486d3f2411b: function(arg0) {
                const ret = arg0.blockSize;
                return ret;
            },
            __wbg_blur_cb8bd1ead8743f99: function() { return handleError(function (arg0) {
                arg0.blur();
            }, arguments); },
            __wbg_body_4e088733babc630d: function(arg0) {
                const ret = arg0.body;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_body_e549239eaff082e1: function(arg0) {
                const ret = arg0.body;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_bottom_29cd36a415d12885: function(arg0) {
                const ret = arg0.bottom;
                return ret;
            },
            __wbg_bufferData_50f5eb06469330e4: function(arg0, arg1, arg2, arg3) {
                arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
            },
            __wbg_bufferData_53e0f7a06b58fe81: function(arg0, arg1, arg2, arg3) {
                arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
            },
            __wbg_bufferData_5fa44d94fe7a3878: function(arg0, arg1, arg2, arg3) {
                arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
            },
            __wbg_bufferData_bad7ce562b6a9eac: function(arg0, arg1, arg2, arg3) {
                arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
            },
            __wbg_bufferSubData_22c4c420e0f67cda: function(arg0, arg1, arg2, arg3) {
                arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
            },
            __wbg_bufferSubData_8609cd8a2c013181: function(arg0, arg1, arg2, arg3) {
                arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
            },
            __wbg_buffer_56ec2905a66f58b9: function(arg0) {
                const ret = arg0.buffer;
                return ret;
            },
            __wbg_button_1aa380c7ca420cd1: function(arg0) {
                const ret = arg0.button;
                return ret;
            },
            __wbg_byobRequest_54f7ce41d584549a: function(arg0) {
                const ret = arg0.byobRequest;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_byteLength_9f985b8373f1f3fe: function(arg0) {
                const ret = arg0.byteLength;
                return ret;
            },
            __wbg_byteOffset_0bd5a6a03553639c: function(arg0) {
                const ret = arg0.byteOffset;
                return ret;
            },
            __wbg_call_1875a20c43a36133: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg0.call(arg1, arg2, arg3);
                return ret;
            }, arguments); },
            __wbg_call_187d372bd5fdd4aa: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.call(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_call_6137034ef55c9d0f: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.call(arg1);
                return ret;
            }, arguments); },
            __wbg_cancelAnimationFrame_6d30ac112c49342a: function() { return handleError(function (arg0, arg1) {
                arg0.cancelAnimationFrame(arg1);
            }, arguments); },
            __wbg_cancel_7c2a08c8db4c73f3: function(arg0) {
                const ret = arg0.cancel();
                return ret;
            },
            __wbg_catch_92594c2d17f55f12: function(arg0, arg1) {
                const ret = arg0.catch(arg1);
                return ret;
            },
            __wbg_changedTouches_df984754af5ef0fa: function(arg0) {
                const ret = arg0.changedTouches;
                return ret;
            },
            __wbg_clearBufferfv_05f7fc7252e623eb: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_clearBufferiv_e8e740accbd0f2df: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
            },
            __wbg_clearBufferuiv_e7f50f91f2195e38: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
            },
            __wbg_clearDepth_4840a5497ae51286: function(arg0, arg1) {
                arg0.clearDepth(arg1);
            },
            __wbg_clearDepth_5a119c24c5d193bc: function(arg0, arg1) {
                arg0.clearDepth(arg1);
            },
            __wbg_clearInterval_f1a050672da2658c: function(arg0, arg1) {
                arg0.clearInterval(arg1);
            },
            __wbg_clearRect_a5e36505218c247a: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.clearRect(arg1, arg2, arg3, arg4);
            },
            __wbg_clearStencil_1b8b8c727f598eec: function(arg0, arg1) {
                arg0.clearStencil(arg1);
            },
            __wbg_clearStencil_e4383e4a543e7997: function(arg0, arg1) {
                arg0.clearStencil(arg1);
            },
            __wbg_clearTimeout_1daad5c6ee4fcd3b: function(arg0) {
                const ret = clearTimeout(arg0);
                return ret;
            },
            __wbg_clearTimeout_c7bc4c3c7a7774af: function(arg0, arg1) {
                arg0.clearTimeout(arg1);
            },
            __wbg_clearTimeout_d60537753c342c73: function(arg0) {
                const ret = clearTimeout(arg0);
                return ret;
            },
            __wbg_clear_175cf3cb6d98d72b: function(arg0, arg1) {
                arg0.clear(arg1 >>> 0);
            },
            __wbg_clear_cb96796cc568b7c8: function(arg0, arg1) {
                arg0.clear(arg1 >>> 0);
            },
            __wbg_click_d990e70c576b7c54: function(arg0) {
                arg0.click();
            },
            __wbg_clientWaitSync_73122aa040ce343d: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.clientWaitSync(arg1, arg2 >>> 0, arg3 >>> 0);
                return ret;
            },
            __wbg_clientX_667e5633f888238d: function(arg0) {
                const ret = arg0.clientX;
                return ret;
            },
            __wbg_clientX_80fda6c64299fd4d: function(arg0) {
                const ret = arg0.clientX;
                return ret;
            },
            __wbg_clientY_0206292d4e8f94cb: function(arg0) {
                const ret = arg0.clientY;
                return ret;
            },
            __wbg_clientY_2cdc00632f185e67: function(arg0) {
                const ret = arg0.clientY;
                return ret;
            },
            __wbg_clipboardData_0048090643ed57a2: function(arg0) {
                const ret = arg0.clipboardData;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_clipboard_9bf6a11ffd0b00a8: function(arg0) {
                const ret = arg0.clipboard;
                return ret;
            },
            __wbg_close_185286988f30f252: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_1f2973155994f1fb: function(arg0) {
                arg0.close();
            },
            __wbg_close_33af1574639aad47: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_748f26698dabe269: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_92be463b8c21cc92: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_d6be50a702eae8fc: function() { return handleError(function (arg0) {
                const ret = arg0.close();
                return ret;
            }, arguments); },
            __wbg_closed_0789702fcb586b8a: function() { return handleError(function (arg0) {
                const ret = arg0.closed;
                return ret;
            }, arguments); },
            __wbg_code_10178722c2b239d2: function(arg0) {
                const ret = arg0.code;
                return ret;
            },
            __wbg_code_422d539f5d7bacbb: function(arg0, arg1) {
                const ret = arg1.code;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_colorMask_4d6afbbbc3022fbe: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
            },
            __wbg_colorMask_8c903995f6f873be: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
            },
            __wbg_compileShader_073a75409aaf96d2: function(arg0, arg1) {
                arg0.compileShader(arg1);
            },
            __wbg_compileShader_c2b53ff3a8851f60: function(arg0, arg1) {
                arg0.compileShader(arg1);
            },
            __wbg_compressedTexSubImage2D_4942a783e20221c2: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
                arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
            },
            __wbg_compressedTexSubImage2D_4c408678ff5f3056: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
            },
            __wbg_compressedTexSubImage2D_80961cdbbd2b3aea: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
                arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
            },
            __wbg_compressedTexSubImage3D_1e0f86237d82f8b9: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
                arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10);
            },
            __wbg_compressedTexSubImage3D_682e402a0ac201ba: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
            },
            __wbg_configure_05da88c43c13964f: function() { return handleError(function (arg0, arg1) {
                arg0.configure(arg1);
            }, arguments); },
            __wbg_configure_0e4789c0f6b35c8e: function() { return handleError(function (arg0, arg1) {
                arg0.configure(arg1);
            }, arguments); },
            __wbg_connect_30bfff6aec59fc83: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.connect(arg1);
                return ret;
            }, arguments); },
            __wbg_contentBoxSize_1c91213ed1ddb06d: function(arg0) {
                const ret = arg0.contentBoxSize;
                return ret;
            },
            __wbg_contentRect_65cd41b1e711b4e1: function(arg0) {
                const ret = arg0.contentRect;
                return ret;
            },
            __wbg_copyBufferSubData_e82219c4834bd9ae: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
            },
            __wbg_copyBufferToBuffer_5e2cd8f10ae78183: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4);
            }, arguments); },
            __wbg_copyBufferToBuffer_ca30deb8de65f5d5: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
            }, arguments); },
            __wbg_copyBufferToTexture_29b9d26780296819: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.copyBufferToTexture(arg1, arg2, arg3);
            }, arguments); },
            __wbg_copyExternalImageToTexture_4df105bb39517948: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.copyExternalImageToTexture(arg1, arg2, arg3);
            }, arguments); },
            __wbg_copyTexSubImage2D_455fba12cf4a776c: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
                arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
            },
            __wbg_copyTexSubImage2D_fe71e36efa520f37: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
                arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
            },
            __wbg_copyTexSubImage3D_717cd6c97934f2e6: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
            },
            __wbg_copyTextureToBuffer_ed6e67a77ecb768d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.copyTextureToBuffer(arg1, arg2, arg3);
            }, arguments); },
            __wbg_copyToChannel_459cca8c62b0e606: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.copyToChannel(getArrayF32FromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_createBindGroupLayout_49a7e2b3d076afcf: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createBindGroupLayout(arg1);
                return ret;
            }, arguments); },
            __wbg_createBindGroup_655c6e6c0258530e: function(arg0, arg1) {
                const ret = arg0.createBindGroup(arg1);
                return ret;
            },
            __wbg_createBufferSource_2cbe6214f761dfcb: function() { return handleError(function (arg0) {
                const ret = arg0.createBufferSource();
                return ret;
            }, arguments); },
            __wbg_createBuffer_0726dd2ab09ea1d2: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createBuffer(arg1);
                return ret;
            }, arguments); },
            __wbg_createBuffer_41ea68f490cd6844: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg0.createBuffer(arg1 >>> 0, arg2 >>> 0, arg3);
                return ret;
            }, arguments); },
            __wbg_createBuffer_d1dd23bf8704564c: function(arg0) {
                const ret = arg0.createBuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createBuffer_ffe613371d42cfd3: function(arg0) {
                const ret = arg0.createBuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createCommandEncoder_ec1f40f0cb4d09df: function(arg0, arg1) {
                const ret = arg0.createCommandEncoder(arg1);
                return ret;
            },
            __wbg_createElement_74049073a11f9c31: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_createFramebuffer_2c6b5b0f49c88e5d: function(arg0) {
                const ret = arg0.createFramebuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createFramebuffer_d0969af4e9886297: function(arg0) {
                const ret = arg0.createFramebuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createImageBitmap_1a53b9fe15f242e6: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createImageBitmap(arg1);
                return ret;
            }, arguments); },
            __wbg_createObjectURL_2f3b38279fe61801: function() { return handleError(function (arg0, arg1) {
                const ret = URL.createObjectURL(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_createPipelineLayout_2c8cd4528b06c108: function(arg0, arg1) {
                const ret = arg0.createPipelineLayout(arg1);
                return ret;
            },
            __wbg_createProgram_cbf448e6f18a9402: function(arg0) {
                const ret = arg0.createProgram();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createProgram_e0c81b0d2b8d0fd0: function(arg0) {
                const ret = arg0.createProgram();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createQuery_ec241083d0b36197: function(arg0) {
                const ret = arg0.createQuery();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createRenderPipeline_cf98d4d699bfb03c: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createRenderPipeline(arg1);
                return ret;
            }, arguments); },
            __wbg_createRenderbuffer_2b17e9fe2e6fb4be: function(arg0) {
                const ret = arg0.createRenderbuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createRenderbuffer_c864095d6ebd60d0: function(arg0) {
                const ret = arg0.createRenderbuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createSampler_1b330d9da0c6523f: function(arg0) {
                const ret = arg0.createSampler();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createSampler_c8ffb3c8d565f704: function(arg0, arg1) {
                const ret = arg0.createSampler(arg1);
                return ret;
            },
            __wbg_createShaderModule_2e44fc7677c6288b: function(arg0, arg1) {
                const ret = arg0.createShaderModule(arg1);
                return ret;
            },
            __wbg_createShader_6c1a2295587878a5: function(arg0, arg1) {
                const ret = arg0.createShader(arg1 >>> 0);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createShader_7c9d99a21ecb08c0: function(arg0, arg1) {
                const ret = arg0.createShader(arg1 >>> 0);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createTexture_01e8e591b64237de: function(arg0) {
                const ret = arg0.createTexture();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createTexture_1bac74c999b8a48e: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createTexture(arg1);
                return ret;
            }, arguments); },
            __wbg_createTexture_5f2583508ebe379b: function(arg0) {
                const ret = arg0.createTexture();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createVertexArrayOES_a8dc8498b56df937: function(arg0) {
                const ret = arg0.createVertexArrayOES();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createVertexArray_b223ea69dd08fcab: function(arg0) {
                const ret = arg0.createVertexArray();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createView_ceaf2f5881adbd34: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createView(arg1);
                return ret;
            }, arguments); },
            __wbg_createWritable_b127e5f5ceb19a0e: function(arg0) {
                const ret = arg0.createWritable();
                return ret;
            },
            __wbg_ctrlKey_282349f48e6cb157: function(arg0) {
                const ret = arg0.ctrlKey;
                return ret;
            },
            __wbg_ctrlKey_8b5101745e8782fa: function(arg0) {
                const ret = arg0.ctrlKey;
                return ret;
            },
            __wbg_cullFace_12123c1c97f1ba2c: function(arg0, arg1) {
                arg0.cullFace(arg1 >>> 0);
            },
            __wbg_cullFace_1a01f0b6d5aeb687: function(arg0, arg1) {
                arg0.cullFace(arg1 >>> 0);
            },
            __wbg_currentTime_eb1592316a1d4450: function(arg0) {
                const ret = arg0.currentTime;
                return ret;
            },
            __wbg_dataTransfer_afa27477f2f9e0e6: function(arg0) {
                const ret = arg0.dataTransfer;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_data_522f7abc70721269: function(arg0) {
                const ret = arg0.data;
                return ret;
            },
            __wbg_data_9ce11d34b90054d4: function(arg0, arg1) {
                const ret = arg1.data;
                const ptr1 = passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_debug_05be7ad0a1e623f8: function(arg0, arg1, arg2, arg3) {
                console.debug(arg0, arg1, arg2, arg3);
            },
            __wbg_debug_52bda05ddf50b736: function(arg0) {
                console.debug(arg0);
            },
            __wbg_decode_b38079ebec6f52e2: function() { return handleError(function (arg0, arg1) {
                arg0.decode(arg1);
            }, arguments); },
            __wbg_deleteBuffer_070e58aaaf2a7a8b: function(arg0, arg1) {
                arg0.deleteBuffer(arg1);
            },
            __wbg_deleteBuffer_7775ee9e248c8468: function(arg0, arg1) {
                arg0.deleteBuffer(arg1);
            },
            __wbg_deleteFramebuffer_3f8ab330098bf8e6: function(arg0, arg1) {
                arg0.deleteFramebuffer(arg1);
            },
            __wbg_deleteFramebuffer_570d3b214a509fa2: function(arg0, arg1) {
                arg0.deleteFramebuffer(arg1);
            },
            __wbg_deleteProgram_822906f0368175d0: function(arg0, arg1) {
                arg0.deleteProgram(arg1);
            },
            __wbg_deleteProgram_b524b30ad176cdb4: function(arg0, arg1) {
                arg0.deleteProgram(arg1);
            },
            __wbg_deleteQuery_266895df9763e0b3: function(arg0, arg1) {
                arg0.deleteQuery(arg1);
            },
            __wbg_deleteRenderbuffer_826c9b43b7ea68f5: function(arg0, arg1) {
                arg0.deleteRenderbuffer(arg1);
            },
            __wbg_deleteRenderbuffer_f4e121a3ab21c605: function(arg0, arg1) {
                arg0.deleteRenderbuffer(arg1);
            },
            __wbg_deleteSampler_f8afded8bf215d53: function(arg0, arg1) {
                arg0.deleteSampler(arg1);
            },
            __wbg_deleteShader_a70f6cc1918d67eb: function(arg0, arg1) {
                arg0.deleteShader(arg1);
            },
            __wbg_deleteShader_da18a294158c2d15: function(arg0, arg1) {
                arg0.deleteShader(arg1);
            },
            __wbg_deleteSync_4f0be28b03f50495: function(arg0, arg1) {
                arg0.deleteSync(arg1);
            },
            __wbg_deleteTexture_78c170241204a466: function(arg0, arg1) {
                arg0.deleteTexture(arg1);
            },
            __wbg_deleteTexture_9f42750adb092e4f: function(arg0, arg1) {
                arg0.deleteTexture(arg1);
            },
            __wbg_deleteVertexArrayOES_e01f31634d466176: function(arg0, arg1) {
                arg0.deleteVertexArrayOES(arg1);
            },
            __wbg_deleteVertexArray_ca9768805d051d49: function(arg0, arg1) {
                arg0.deleteVertexArray(arg1);
            },
            __wbg_delete_1c154aa16ccca35a: function() { return handleError(function (arg0, arg1, arg2) {
                delete arg0[getStringFromWasm0(arg1, arg2)];
            }, arguments); },
            __wbg_deltaMode_6280d8266d5520f5: function(arg0) {
                const ret = arg0.deltaMode;
                return ret;
            },
            __wbg_deltaX_d330516e89f03877: function(arg0) {
                const ret = arg0.deltaX;
                return ret;
            },
            __wbg_deltaY_7abc8fc9878d0002: function(arg0) {
                const ret = arg0.deltaY;
                return ret;
            },
            __wbg_depthFunc_92e96d8f46a23300: function(arg0, arg1) {
                arg0.depthFunc(arg1 >>> 0);
            },
            __wbg_depthFunc_a41fb5adacb22e09: function(arg0, arg1) {
                arg0.depthFunc(arg1 >>> 0);
            },
            __wbg_depthMask_06ecff4d4514c38f: function(arg0, arg1) {
                arg0.depthMask(arg1 !== 0);
            },
            __wbg_depthMask_0d7c3dec3b8405ee: function(arg0, arg1) {
                arg0.depthMask(arg1 !== 0);
            },
            __wbg_depthRange_24c7969249461e8e: function(arg0, arg1, arg2) {
                arg0.depthRange(arg1, arg2);
            },
            __wbg_depthRange_6a4e169ccf314148: function(arg0, arg1, arg2) {
                arg0.depthRange(arg1, arg2);
            },
            __wbg_description_02485704e69b1e7f: function(arg0, arg1) {
                const ret = arg1.description;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_destination_05471d87031cba86: function(arg0) {
                const ret = arg0.destination;
                return ret;
            },
            __wbg_destroy_7ae6d79c9c5ca8d9: function(arg0) {
                arg0.destroy();
            },
            __wbg_destroy_fe937f756bf8df37: function(arg0) {
                arg0.destroy();
            },
            __wbg_devicePixelContentBoxSize_83d4c55aa7829e7a: function(arg0) {
                const ret = arg0.devicePixelContentBoxSize;
                return ret;
            },
            __wbg_devicePixelRatio_7d39e9af5448d3d4: function(arg0) {
                const ret = arg0.devicePixelRatio;
                return ret;
            },
            __wbg_disableVertexAttribArray_11c9f11bee30c9d8: function(arg0, arg1) {
                arg0.disableVertexAttribArray(arg1 >>> 0);
            },
            __wbg_disableVertexAttribArray_c4c8af1f9e4120d4: function(arg0, arg1) {
                arg0.disableVertexAttribArray(arg1 >>> 0);
            },
            __wbg_disable_19fe787eccdf0272: function(arg0, arg1) {
                arg0.disable(arg1 >>> 0);
            },
            __wbg_disable_81b2cb5f8cea15ae: function(arg0, arg1) {
                arg0.disable(arg1 >>> 0);
            },
            __wbg_disconnect_1eac4c705724307d: function(arg0) {
                arg0.disconnect();
            },
            __wbg_displayHeight_903e670be87f29ab: function(arg0) {
                const ret = arg0.displayHeight;
                return ret;
            },
            __wbg_displayWidth_5da2bf55e335368a: function(arg0) {
                const ret = arg0.displayWidth;
                return ret;
            },
            __wbg_document_9854e03c05fc8834: function(arg0) {
                const ret = arg0.document;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_done_b41a1d26cdb37fb6: function(arg0) {
                const ret = arg0.done;
                return ret;
            },
            __wbg_drawArraysInstancedANGLE_b76512b5abba6668: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
            },
            __wbg_drawArraysInstanced_9b44aa78a087154d: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
            },
            __wbg_drawArrays_08872e02fb57b847: function(arg0, arg1, arg2, arg3) {
                arg0.drawArrays(arg1 >>> 0, arg2, arg3);
            },
            __wbg_drawArrays_741af5c3f8db636f: function(arg0, arg1, arg2, arg3) {
                arg0.drawArrays(arg1 >>> 0, arg2, arg3);
            },
            __wbg_drawBuffersWEBGL_c1bc0bbfd584c9b2: function(arg0, arg1) {
                arg0.drawBuffersWEBGL(arg1);
            },
            __wbg_drawBuffers_7a58bd4729f7a1fc: function(arg0, arg1) {
                arg0.drawBuffers(arg1);
            },
            __wbg_drawElementsInstancedANGLE_c3fc0cfa9e29a1bc: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
            },
            __wbg_drawElementsInstanced_d7c396aa034159b6: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
            },
            __wbg_drawIndexed_d31913e79d58fbac: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
            },
            __wbg_draw_6877f98847e1e36c: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_elementFromPoint_8f6f88cd3ac4b9e8: function(arg0, arg1, arg2) {
                const ret = arg0.elementFromPoint(arg1, arg2);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_elementFromPoint_fb48b4624ec3dd6a: function(arg0, arg1, arg2) {
                const ret = arg0.elementFromPoint(arg1, arg2);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_enableVertexAttribArray_1496b78a8dbab9fd: function(arg0, arg1) {
                arg0.enableVertexAttribArray(arg1 >>> 0);
            },
            __wbg_enableVertexAttribArray_d52693866bc8b8dd: function(arg0, arg1) {
                arg0.enableVertexAttribArray(arg1 >>> 0);
            },
            __wbg_enable_6eeb9c0e9b483cee: function(arg0, arg1) {
                arg0.enable(arg1 >>> 0);
            },
            __wbg_enable_cb4fc19b51148c37: function(arg0, arg1) {
                arg0.enable(arg1 >>> 0);
            },
            __wbg_endQuery_73863d04a795d520: function(arg0, arg1) {
                arg0.endQuery(arg1 >>> 0);
            },
            __wbg_end_f99ebed53d4e198a: function(arg0) {
                arg0.end();
            },
            __wbg_enqueue_4a01c128f9a0de16: function() { return handleError(function (arg0, arg1) {
                arg0.enqueue(arg1);
            }, arguments); },
            __wbg_entries_b55ec7e0dc443355: function(arg0) {
                const ret = arg0.entries();
                return ret;
            },
            __wbg_entries_fb6397112b1de25f: function(arg0) {
                const ret = Object.entries(arg0);
                return ret;
            },
            __wbg_error_622f41c5c32a13db: function(arg0) {
                const ret = arg0.error;
                return ret;
            },
            __wbg_error_6614f5677eeead43: function(arg0, arg1, arg2, arg3) {
                console.error(arg0, arg1, arg2, arg3);
            },
            __wbg_error_8f639d3fdf91a023: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.error(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_error_c9cf3fc2064683a9: function(arg0) {
                console.error(arg0);
            },
            __wbg_features_2b07a28fe18ad0ce: function(arg0) {
                const ret = arg0.features;
                return ret;
            },
            __wbg_fenceSync_330293024adb66bc: function(arg0, arg1, arg2) {
                const ret = arg0.fenceSync(arg1 >>> 0, arg2 >>> 0);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_fetch_073e6e0d64ee3266: function(arg0) {
                const ret = fetch(arg0);
                return ret;
            },
            __wbg_fetch_1b541f8ace38278a: function(arg0, arg1) {
                const ret = fetch(arg0, arg1);
                return ret;
            },
            __wbg_fetch_7a37768ab67c5bd8: function(arg0) {
                const ret = fetch(arg0);
                return ret;
            },
            __wbg_fetch_7b5de4f88137a4dc: function(arg0, arg1, arg2) {
                const ret = arg0.fetch(arg1, arg2);
                return ret;
            },
            __wbg_fetch_efc64baf325b084d: function(arg0, arg1) {
                const ret = arg0.fetch(arg1);
                return ret;
            },
            __wbg_files_cb1ce1b82f16c484: function(arg0) {
                const ret = arg0.files;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_files_fe03006f0ba1a5f0: function(arg0) {
                const ret = arg0.files;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_fillText_1bcec8b81ad73bd0: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
            }, arguments); },
            __wbg_finish_173a156040775de3: function(arg0) {
                arg0.finish();
            },
            __wbg_finish_31ffb964be7e9749: function(arg0) {
                arg0.finish();
            },
            __wbg_finish_4d91de5e927dd13f: function(arg0, arg1) {
                const ret = arg0.finish(arg1);
                return ret;
            },
            __wbg_finish_6e06b68ab68cd9f6: function(arg0) {
                const ret = arg0.finish();
                return ret;
            },
            __wbg_flush_0a2d3c83fc11fb1b: function(arg0) {
                const ret = arg0.flush();
                return ret;
            },
            __wbg_flush_13b162660ad850d2: function(arg0) {
                arg0.flush();
            },
            __wbg_flush_a5ad38200881ac35: function(arg0) {
                arg0.flush();
            },
            __wbg_focus_e1638be0df4aeb8f: function() { return handleError(function (arg0, arg1) {
                arg0.focus(arg1);
            }, arguments); },
            __wbg_force_7632bf44933b4388: function(arg0) {
                const ret = arg0.force;
                return ret;
            },
            __wbg_forward_c88c220987d924b3: function() { return handleError(function (arg0) {
                arg0.forward();
            }, arguments); },
            __wbg_framebufferRenderbuffer_1c6337e0030411f3: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
            },
            __wbg_framebufferRenderbuffer_f019e9231b142c0d: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
            },
            __wbg_framebufferTexture2D_73c52f23ec33aa22: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
            },
            __wbg_framebufferTexture2D_caddefa1f767646e: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
            },
            __wbg_framebufferTextureLayer_1d5c0f0e3234e521: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
            },
            __wbg_framebufferTextureMultiviewOVR_77f19224ff7be6ef: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.framebufferTextureMultiviewOVR(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5, arg6);
            },
            __wbg_frontFace_6751b4b97f997aeb: function(arg0, arg1) {
                arg0.frontFace(arg1 >>> 0);
            },
            __wbg_frontFace_b064adb15b6f3772: function(arg0, arg1) {
                arg0.frontFace(arg1 >>> 0);
            },
            __wbg_getBindGroupLayout_8b86af56ae09c095: function(arg0, arg1) {
                const ret = arg0.getBindGroupLayout(arg1 >>> 0);
                return ret;
            },
            __wbg_getBoundingClientRect_57152b1a20f3de34: function(arg0) {
                const ret = arg0.getBoundingClientRect();
                return ret;
            },
            __wbg_getBufferSubData_dd23246099b166d1: function(arg0, arg1, arg2, arg3) {
                arg0.getBufferSubData(arg1 >>> 0, arg2, arg3);
            },
            __wbg_getComputedStyle_dd0f456804795fd6: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.getComputedStyle(arg1);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getContext_051324720aa5b7e8: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getContext_189ce278aa985704: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getContext_635e36719cad2623: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getContext_e567868594d2e0c6: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getCurrentTexture_20714d1bd9051cab: function() { return handleError(function (arg0) {
                const ret = arg0.getCurrentTexture();
                return ret;
            }, arguments); },
            __wbg_getData_bc58070c107b7d8a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg1.getData(getStringFromWasm0(arg2, arg3));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_getDirectoryHandle_32ff6719da8ccf70: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getDirectoryHandle(getStringFromWasm0(arg1, arg2), arg3);
                return ret;
            },
            __wbg_getDirectoryHandle_3df089cef76afec9: function(arg0, arg1, arg2) {
                const ret = arg0.getDirectoryHandle(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_getDirectory_8257f053b0d3e746: function(arg0) {
                const ret = arg0.getDirectory();
                return ret;
            },
            __wbg_getElementById_cc94972b404e4eaa: function(arg0, arg1, arg2) {
                const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_getExtension_abfda2c5db286b07: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getFileHandle_0357a6e30a3f80ba: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getFileHandle(getStringFromWasm0(arg1, arg2), arg3);
                return ret;
            },
            __wbg_getFileHandle_41a1c1b19fcfb783: function(arg0, arg1, arg2) {
                const ret = arg0.getFileHandle(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_getFile_75187c3eb15ebeee: function(arg0) {
                const ret = arg0.getFile();
                return ret;
            },
            __wbg_getImageData_e3d068a7241cd3d4: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                const ret = arg0.getImageData(arg1, arg2, arg3, arg4);
                return ret;
            }, arguments); },
            __wbg_getIndexedParameter_0f49864473e337fa: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
                return ret;
            }, arguments); },
            __wbg_getItem_4c80b7663197c7ff: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg1.getItem(getStringFromWasm0(arg2, arg3));
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_getMappedRange_d0bf3141224111b6: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getMappedRange(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_getParameter_974595a6624c6c10: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.getParameter(arg1 >>> 0);
                return ret;
            }, arguments); },
            __wbg_getParameter_a97f491753b05668: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.getParameter(arg1 >>> 0);
                return ret;
            }, arguments); },
            __wbg_getPreferredCanvasFormat_8b57039d1801a506: function(arg0) {
                const ret = arg0.getPreferredCanvasFormat();
                return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 102) - 1;
            },
            __wbg_getProgramInfoLog_208fb1ff31006495: function(arg0, arg1, arg2) {
                const ret = arg1.getProgramInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_getProgramInfoLog_3276b294d6d42fe2: function(arg0, arg1, arg2) {
                const ret = arg1.getProgramInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_getProgramParameter_50bafab01cf88652: function(arg0, arg1, arg2) {
                const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getProgramParameter_fc7124bb9fb7c675: function(arg0, arg1, arg2) {
                const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getPropertyValue_e90a3628c2de4fb6: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_getQueryParameter_937ba13f77db778f: function(arg0, arg1, arg2) {
                const ret = arg0.getQueryParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getRandomValues_a608c4436c19407a: function() { return handleError(function (arg0, arg1) {
                globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
            }, arguments); },
            __wbg_getRandomValues_eb590f34c5dc8fa0: function() { return handleError(function (arg0, arg1) {
                globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
            }, arguments); },
            __wbg_getReader_9facd4f899beac89: function() { return handleError(function (arg0) {
                const ret = arg0.getReader();
                return ret;
            }, arguments); },
            __wbg_getRootNode_76c323f0bf80bdcd: function(arg0) {
                const ret = arg0.getRootNode();
                return ret;
            },
            __wbg_getShaderInfoLog_7e0cbba353ca95da: function(arg0, arg1, arg2) {
                const ret = arg1.getShaderInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_getShaderInfoLog_bb64c5a52df0b7a3: function(arg0, arg1, arg2) {
                const ret = arg1.getShaderInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_getShaderParameter_745acf10b8e45e31: function(arg0, arg1, arg2) {
                const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getShaderParameter_e55ea9c456df5484: function(arg0, arg1, arg2) {
                const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getSupportedExtensions_1459bad37860c0c3: function(arg0) {
                const ret = arg0.getSupportedExtensions();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_getSupportedProfiles_7b2acfa66b565d24: function(arg0) {
                const ret = arg0.getSupportedProfiles();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_getSyncParameter_bb4be47b67bfa2f8: function(arg0, arg1, arg2) {
                const ret = arg0.getSyncParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getTime_f5a55efff2585d5d: function(arg0) {
                const ret = arg0.getTime();
                return ret;
            },
            __wbg_getUniformBlockIndex_5e2252ceb34531a5: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
                return ret;
            },
            __wbg_getUniformLocation_50ba45dade572703: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_getUniformLocation_cb4e3e121235f91a: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_31af05bd4842a84f: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_get_5dde8a29f073d908: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_658f6698067d9515: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_get_6c896e0571ddae51: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_get_9356b22e2a46465d: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_b64ce72bb2abf052: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_done_7020b91c987365c7: function(arg0) {
                const ret = arg0.done;
                return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
            },
            __wbg_get_fd12a9100976c296: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_unchecked_288889d017702237: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_get_value_87fbd6ad1283f2e7: function(arg0) {
                const ret = arg0.value;
                return ret;
            },
            __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
                const ret = arg0[arg1];
                return ret;
            },
            __wbg_gpu_2ccc250735d24a2a: function(arg0) {
                const ret = arg0.gpu;
                return ret;
            },
            __wbg_has_0c97053e877f47cc: function(arg0, arg1, arg2) {
                const ret = arg0.has(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_has_5d6706e5209576c1: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.has(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_has_de9485569f592388: function(arg0, arg1, arg2) {
                const ret = arg0.has(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_hash_c4083658cccb641b: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.hash;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_headers_6930a8bd09b630de: function(arg0) {
                const ret = arg0.headers;
                return ret;
            },
            __wbg_headers_eba93595f8944c2f: function(arg0) {
                const ret = arg0.headers;
                return ret;
            },
            __wbg_height_50d2b2bc8c6ec859: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_height_816341c9bbd4e9e3: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_height_9dca4d43c3e4b84b: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_height_aa756cf29b6d629c: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_height_c9feb8f4a9a61abc: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_height_fc97e1a0c2e7331f: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_hidden_2ba371ecafe013fa: function(arg0) {
                const ret = arg0.hidden;
                return ret;
            },
            __wbg_history_4128e7793fa4758c: function() { return handleError(function (arg0) {
                const ret = arg0.history;
                return ret;
            }, arguments); },
            __wbg_host_75aa3342c78db1a2: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.host;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_hostname_b9a71dd3c2da0eef: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.hostname;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_href_221703ee1ed727fc: function(arg0, arg1) {
                const ret = arg1.href;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_href_abc902beb29d526e: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.href;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_identifier_24ee7ee6118f12a7: function(arg0) {
                const ret = arg0.identifier;
                return ret;
            },
            __wbg_includes_9b0dfa946c313621: function(arg0, arg1, arg2) {
                const ret = arg0.includes(arg1, arg2);
                return ret;
            },
            __wbg_info_26925f73a2eee895: function(arg0) {
                console.info(arg0);
            },
            __wbg_info_b68ad4a35d1670c2: function(arg0, arg1, arg2, arg3) {
                console.info(arg0, arg1, arg2, arg3);
            },
            __wbg_info_cf0d9a286850cd24: function(arg0) {
                const ret = arg0.info;
                return ret;
            },
            __wbg_inlineSize_edbf0c52598aa763: function(arg0) {
                const ret = arg0.inlineSize;
                return ret;
            },
            __wbg_inputType_bcd41e55691a33d9: function(arg0, arg1) {
                const ret = arg1.inputType;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_insertBefore_f1ba67809033f6b1: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.insertBefore(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ArrayBuffer;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_CanvasRenderingContext2d_769208c72dcbf5e6: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof CanvasRenderingContext2D;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Document_b2a06e9deaeb61d1: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Document;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_DomException_550db3f9465a933f: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof DOMException;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Element_818e11074cdb63b5: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Element;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Error_80a725f81f2e102d: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Error;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_FileSystemDirectoryHandle_f9d9528a8c896a2b: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof FileSystemDirectoryHandle;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_FileSystemFileHandle_f5198fa86c4096bc: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof FileSystemFileHandle;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_FileSystemWritableFileStream_368c673c7ccb7824: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof FileSystemWritableFileStream;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_File_b5643aaf31866db3: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof File;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_GpuOutOfMemoryError_6429c750997f1c8d: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof GPUOutOfMemoryError;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_GpuValidationError_75fa3611f065f4df: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof GPUValidationError;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlAnchorElement_e2e601da36602959: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLAnchorElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlButtonElement_bd67486d3501ad48: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLButtonElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlCanvasElement_0a30c11fbbf41841: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLCanvasElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlElement_32fb153a5a0e2349: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlInputElement_5c33d1de59c09c49: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLInputElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ImageBitmap_74bea45ee48d3d7a: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ImageBitmap;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessageEvent_46c3b0b2da4bd1ab: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessageEvent;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Promise_e1dc6893aa1ece28: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Promise;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ReadableStream_e2d77912575119ab: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ReadableStream;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ResizeObserverEntry_159abe6614a8e952: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ResizeObserverEntry;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ResizeObserverSize_f9d47e3f8cfd50db: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ResizeObserverSize;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Response_b8758567269c30b2: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Response;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ShadowRoot_0ef114d846d9fd90: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ShadowRoot;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_TypeError_7837a7bf26afc217: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof TypeError;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Uint8Array;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_WebGl2RenderingContext_64c994c14c0790fb: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof WebGL2RenderingContext;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Window_82d71df4eddf88bc: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Window;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_invalidateFramebuffer_4f576db65bb37d6a: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.invalidateFramebuffer(arg1 >>> 0, arg2);
            }, arguments); },
            __wbg_isActive_c6868ea0a8a0dfaf: function(arg0) {
                const ret = arg0.isActive;
                return ret;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function(arg0) {
                const ret = Array.isArray(arg0);
                return ret;
            },
            __wbg_isComposing_600c9236938f8e5a: function(arg0) {
                const ret = arg0.isComposing;
                return ret;
            },
            __wbg_isComposing_d03a4fd2d6155b14: function(arg0) {
                const ret = arg0.isComposing;
                return ret;
            },
            __wbg_isFallbackAdapter_8ccb967428491dcb: function(arg0) {
                const ret = arg0.isFallbackAdapter;
                return ret;
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function(arg0) {
                const ret = Number.isSafeInteger(arg0);
                return ret;
            },
            __wbg_isSecureContext_e61363f740acf8de: function(arg0) {
                const ret = arg0.isSecureContext;
                return ret;
            },
            __wbg_is_4b278c0bd3caba97: function(arg0, arg1) {
                const ret = Object.is(arg0, arg1);
                return ret;
            },
            __wbg_item_0c8f652c0830e437: function(arg0, arg1) {
                const ret = arg0.item(arg1 >>> 0);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_items_25f8ccc11891dbeb: function(arg0) {
                const ret = arg0.items;
                return ret;
            },
            __wbg_iterator_e3c31c892080e444: function() {
                const ret = Symbol.iterator;
                return ret;
            },
            __wbg_keyCode_fbee6c8fd374ff5e: function(arg0) {
                const ret = arg0.keyCode;
                return ret;
            },
            __wbg_key_1193871533b99ae5: function(arg0, arg1) {
                const ret = arg1.key;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_key_7614b2b8208c9e13: function(arg0, arg1) {
                const ret = arg1.key;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_label_7ed42f25f841996b: function(arg0, arg1) {
                const ret = arg1.label;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_left_e0a244490fe2f293: function(arg0) {
                const ret = arg0.left;
                return ret;
            },
            __wbg_length_06ca2697fe194eac: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_357ad61f15f550be: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_7f3c00c40364105e: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_d4bdea10311bd9cf: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_ff6b2e0dd257ad9a: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_limits_20c6f56636df7d38: function(arg0) {
                const ret = arg0.limits;
                return ret;
            },
            __wbg_limits_328c61cd41512420: function(arg0) {
                const ret = arg0.limits;
                return ret;
            },
            __wbg_linkProgram_571a9ea00d38ff83: function(arg0, arg1) {
                arg0.linkProgram(arg1);
            },
            __wbg_linkProgram_acdc299c43d734a0: function(arg0, arg1) {
                arg0.linkProgram(arg1);
            },
            __wbg_localStorage_567c24950edbc178: function() { return handleError(function (arg0) {
                const ret = arg0.localStorage;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_location_9c46e8ada95d3174: function(arg0) {
                const ret = arg0.location;
                return ret;
            },
            __wbg_mapAsync_52b01fa9e8f765fd: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
                return ret;
            },
            __wbg_matchMedia_8a4857f947f11f82: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_matches_778d0873b064b1bf: function(arg0) {
                const ret = arg0.matches;
                return ret;
            },
            __wbg_maxBindGroupsPlusVertexBuffers_33e5006b23e20478: function(arg0) {
                const ret = arg0.maxBindGroupsPlusVertexBuffers;
                return ret;
            },
            __wbg_maxBindGroups_f6d26f3a67826666: function(arg0) {
                const ret = arg0.maxBindGroups;
                return ret;
            },
            __wbg_maxBindingsPerBindGroup_edab2e8dabbf6060: function(arg0) {
                const ret = arg0.maxBindingsPerBindGroup;
                return ret;
            },
            __wbg_maxBufferSize_bbc69284c14aa7da: function(arg0) {
                const ret = arg0.maxBufferSize;
                return ret;
            },
            __wbg_maxColorAttachmentBytesPerSample_63ebe4f81de2f34c: function(arg0) {
                const ret = arg0.maxColorAttachmentBytesPerSample;
                return ret;
            },
            __wbg_maxColorAttachments_aed8c38beabf3a5c: function(arg0) {
                const ret = arg0.maxColorAttachments;
                return ret;
            },
            __wbg_maxComputeInvocationsPerWorkgroup_2d964564c37f1c65: function(arg0) {
                const ret = arg0.maxComputeInvocationsPerWorkgroup;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeX_a3e3206570da184f: function(arg0) {
                const ret = arg0.maxComputeWorkgroupSizeX;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeY_dffa4a62244b7563: function(arg0) {
                const ret = arg0.maxComputeWorkgroupSizeY;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeZ_976ebcb760f6d07d: function(arg0) {
                const ret = arg0.maxComputeWorkgroupSizeZ;
                return ret;
            },
            __wbg_maxComputeWorkgroupStorageSize_2e8dbece6e532e2a: function(arg0) {
                const ret = arg0.maxComputeWorkgroupStorageSize;
                return ret;
            },
            __wbg_maxComputeWorkgroupsPerDimension_bb7d36b4d20c80f4: function(arg0) {
                const ret = arg0.maxComputeWorkgroupsPerDimension;
                return ret;
            },
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_1ca859cb96a414e0: function(arg0) {
                const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
                return ret;
            },
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_e968f2c8cd8f4d46: function(arg0) {
                const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
                return ret;
            },
            __wbg_maxInterStageShaderVariables_138ac882c4d6a3d3: function(arg0) {
                const ret = arg0.maxInterStageShaderVariables;
                return ret;
            },
            __wbg_maxSampledTexturesPerShaderStage_bb3e6b2698321fa6: function(arg0) {
                const ret = arg0.maxSampledTexturesPerShaderStage;
                return ret;
            },
            __wbg_maxSamplersPerShaderStage_98c00a1829fa414b: function(arg0) {
                const ret = arg0.maxSamplersPerShaderStage;
                return ret;
            },
            __wbg_maxStorageBufferBindingSize_e500e31f479e669e: function(arg0) {
                const ret = arg0.maxStorageBufferBindingSize;
                return ret;
            },
            __wbg_maxStorageBuffersPerShaderStage_eb663f6d7521b6a7: function(arg0) {
                const ret = arg0.maxStorageBuffersPerShaderStage;
                return ret;
            },
            __wbg_maxStorageTexturesPerShaderStage_bb3ad93b53e618c0: function(arg0) {
                const ret = arg0.maxStorageTexturesPerShaderStage;
                return ret;
            },
            __wbg_maxTextureArrayLayers_2a56d05fb261c99a: function(arg0) {
                const ret = arg0.maxTextureArrayLayers;
                return ret;
            },
            __wbg_maxTextureDimension1D_84590c1d4770d319: function(arg0) {
                const ret = arg0.maxTextureDimension1D;
                return ret;
            },
            __wbg_maxTextureDimension2D_7f2b5c8b2727e3fc: function(arg0) {
                const ret = arg0.maxTextureDimension2D;
                return ret;
            },
            __wbg_maxTextureDimension3D_7f3babddf55c32a6: function(arg0) {
                const ret = arg0.maxTextureDimension3D;
                return ret;
            },
            __wbg_maxUniformBufferBindingSize_d80a09e23c0b284c: function(arg0) {
                const ret = arg0.maxUniformBufferBindingSize;
                return ret;
            },
            __wbg_maxUniformBuffersPerShaderStage_0b8b2de676fa740e: function(arg0) {
                const ret = arg0.maxUniformBuffersPerShaderStage;
                return ret;
            },
            __wbg_maxVertexAttributes_a693dd921316649b: function(arg0) {
                const ret = arg0.maxVertexAttributes;
                return ret;
            },
            __wbg_maxVertexBufferArrayStride_f256d91f281076cb: function(arg0) {
                const ret = arg0.maxVertexBufferArrayStride;
                return ret;
            },
            __wbg_maxVertexBuffers_70ab564b25d5ac20: function(arg0) {
                const ret = arg0.maxVertexBuffers;
                return ret;
            },
            __wbg_measureText_1035b288be51876c: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.measureText(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_message_4ada57a3710f1502: function(arg0, arg1) {
                const ret = arg1.message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_message_d988ea596c5f5c9a: function(arg0, arg1) {
                const ret = arg1.message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_metaKey_9c3be2ab835b0148: function(arg0) {
                const ret = arg0.metaKey;
                return ret;
            },
            __wbg_metaKey_fb78da4d237d5bbb: function(arg0) {
                const ret = arg0.metaKey;
                return ret;
            },
            __wbg_minStorageBufferOffsetAlignment_3248ed00dcdbf79f: function(arg0) {
                const ret = arg0.minStorageBufferOffsetAlignment;
                return ret;
            },
            __wbg_minUniformBufferOffsetAlignment_3b9fa4caae03e903: function(arg0) {
                const ret = arg0.minUniformBufferOffsetAlignment;
                return ret;
            },
            __wbg_name_06fefa2542c6ce51: function(arg0, arg1) {
                const ret = arg1.name;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_name_30c2cf5d3e6226e8: function(arg0, arg1) {
                const ret = arg1.name;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_navigator_2156486643462a87: function(arg0) {
                const ret = arg0.navigator;
                return ret;
            },
            __wbg_navigator_c9bce48d4b578c9c: function(arg0) {
                const ret = arg0.navigator;
                return ret;
            },
            __wbg_newValue_bdf1fc73be1eaa6a: function(arg0, arg1) {
                const ret = arg1.newValue;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_new_0_72d020f0c63443d4: function() {
                const ret = new Date();
                return ret;
            },
            __wbg_new_1a8d2827bd9e1a2e: function() { return handleError(function (arg0) {
                const ret = new ResizeObserver(arg0);
                return ret;
            }, arguments); },
            __wbg_new_1dbf7428bba60a42: function(arg0) {
                const ret = new Uint8Array(arg0);
                return ret;
            },
            __wbg_new_250d7f9408a7a446: function() { return handleError(function (arg0) {
                const ret = new VideoDecoder(arg0);
                return ret;
            }, arguments); },
            __wbg_new_2bdcdfcebdfc34d2: function(arg0, arg1) {
                const ret = new TypeError(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_2e41357094e99294: function() { return handleError(function () {
                const ret = new AbortController();
                return ret;
            }, arguments); },
            __wbg_new_343a093a3c2ffb4e: function(arg0, arg1) {
                const ret = new Error(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_5502aad30c185fc8: function(arg0, arg1) {
                try {
                    var state0 = {a: arg0, b: arg1};
                    var cb0 = (arg0, arg1) => {
                        const a = state0.a;
                        state0.a = 0;
                        try {
                            return wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                        } finally {
                            state0.a = a;
                        }
                    };
                    const ret = new Promise(cb0);
                    return ret;
                } finally {
                    state0.a = 0;
                }
            },
            __wbg_new_617a8cdb8bb1130e: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_820eb53f620ccf82: function() { return handleError(function (arg0, arg1) {
                const ret = new URL(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_83ca405eae412a62: function() { return handleError(function () {
                const ret = new Headers();
                return ret;
            }, arguments); },
            __wbg_new_a217df4351db4b9b: function() { return handleError(function (arg0, arg1) {
                const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
                return ret;
            }, arguments); },
            __wbg_new_a876c6b7d4435a0d: function() {
                const ret = new Error();
                return ret;
            },
            __wbg_new_b5f7d6e100c3090b: function() {
                const ret = new Error();
                return ret;
            },
            __wbg_new_c800107a985d1494: function() { return handleError(function (arg0) {
                const ret = new EncodedVideoChunk(arg0);
                return ret;
            }, arguments); },
            __wbg_new_d429ac7f5b1a2c5c: function() { return handleError(function () {
                const ret = new FormData();
                return ret;
            }, arguments); },
            __wbg_new_d92488e3f585ed02: function() { return handleError(function () {
                const ret = new URLSearchParams();
                return ret;
            }, arguments); },
            __wbg_new_e32e15714757492a: function(arg0, arg1) {
                const ret = new Intl.DateTimeFormat(arg0, arg1);
                return ret;
            },
            __wbg_new_ee2291f50781bf1d: function() {
                const ret = new Array();
                return ret;
            },
            __wbg_new_from_slice_9a868026ffa4208a: function(arg0, arg1) {
                const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_typed_689a3a281a8d4da6: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_typed_b01cb72a8af741a3: function(arg0, arg1) {
                try {
                    var state0 = {a: arg0, b: arg1};
                    var cb0 = (arg0, arg1) => {
                        const a = state0.a;
                        state0.a = 0;
                        try {
                            return wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                        } finally {
                            state0.a = a;
                        }
                    };
                    const ret = new Promise(cb0);
                    return ret;
                } finally {
                    state0.a = 0;
                }
            },
            __wbg_new_with_byte_offset_and_length_2f5d7fc2a828b74d: function(arg0, arg1, arg2) {
                const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
                return ret;
            },
            __wbg_new_with_context_options_d6eac9ebf7bbea7b: function() { return handleError(function (arg0) {
                const ret = new lAudioContext(arg0);
                return ret;
            }, arguments); },
            __wbg_new_with_image_bitmap_and_video_frame_init_a71a34427a6766ad: function() { return handleError(function (arg0, arg1) {
                const ret = new VideoFrame(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_new_with_length_3da0ad195f6f63ba: function(arg0) {
                const ret = new Uint8Array(arg0 >>> 0);
                return ret;
            },
            __wbg_new_with_record_from_str_to_blob_promise_d8b08e210be436ad: function() { return handleError(function (arg0) {
                const ret = new ClipboardItem(arg0);
                return ret;
            }, arguments); },
            __wbg_new_with_str_and_init_4618dee4e950224f: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_new_with_str_bb707702009e7af7: function() { return handleError(function (arg0, arg1) {
                const ret = new URLSearchParams(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_with_u8_array_sequence_and_options_fccc08fe93f4b8fd: function() { return handleError(function (arg0, arg1) {
                const ret = new Blob(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_nextSibling_e5ecc9bf11c2365d: function(arg0) {
                const ret = arg0.nextSibling;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_next_33784799010f1bbe: function(arg0) {
                const ret = arg0.next;
                return ret;
            },
            __wbg_next_f4aac29c42af995c: function() { return handleError(function (arg0) {
                const ret = arg0.next();
                return ret;
            }, arguments); },
            __wbg_now_aa4ccb83129e9e55: function() {
                const ret = Date.now();
                return ret;
            },
            __wbg_now_d0b7f4bea9f38490: function(arg0) {
                const ret = arg0.now();
                return ret;
            },
            __wbg_now_e7c6795a7f81e10f: function(arg0) {
                const ret = arg0.now();
                return ret;
            },
            __wbg_observe_d2d34ca6fcb958b1: function(arg0, arg1, arg2) {
                arg0.observe(arg1, arg2);
            },
            __wbg_of_d5dbecdc59e02e34: function(arg0) {
                const ret = Array.of(arg0);
                return ret;
            },
            __wbg_offsetLeft_eef008f2ccb3b242: function(arg0) {
                const ret = arg0.offsetLeft;
                return ret;
            },
            __wbg_offsetTop_c36b688834dcdce3: function(arg0) {
                const ret = arg0.offsetTop;
                return ret;
            },
            __wbg_ok_125878a7db256ecb: function(arg0) {
                const ret = arg0.ok;
                return ret;
            },
            __wbg_onSubmittedWorkDone_270d6b5a45520e79: function(arg0) {
                const ret = arg0.onSubmittedWorkDone();
                return ret;
            },
            __wbg_open_63d11545c91841a8: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), getStringFromWasm0(arg5, arg6));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_open_d426932d10a5f130: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_origin_96d72883773c6d82: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.origin;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_parentNode_32afd0d7ad7dca98: function(arg0) {
                const ret = arg0.parentNode;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_pathname_2722e395309e4ee1: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.pathname;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
                const ret = arg0.performance;
                return ret;
            },
            __wbg_performance_d0d7b03fc649b694: function(arg0) {
                const ret = arg0.performance;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_persist_b201b6aae57c4d30: function() { return handleError(function (arg0) {
                const ret = arg0.persist();
                return ret;
            }, arguments); },
            __wbg_pipeTo_ac05d32161ffb42c: function(arg0, arg1) {
                const ret = arg0.pipeTo(arg1);
                return ret;
            },
            __wbg_pixelStorei_af18e636b3e7b725: function(arg0, arg1, arg2) {
                arg0.pixelStorei(arg1 >>> 0, arg2);
            },
            __wbg_pixelStorei_cb4e43466f5b8703: function(arg0, arg1, arg2) {
                arg0.pixelStorei(arg1 >>> 0, arg2);
            },
            __wbg_polygonOffset_81dc8ca84e29572b: function(arg0, arg1, arg2) {
                arg0.polygonOffset(arg1, arg2);
            },
            __wbg_polygonOffset_8f922d9173d8849d: function(arg0, arg1, arg2) {
                arg0.polygonOffset(arg1, arg2);
            },
            __wbg_port_73ba89eedf847423: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.port;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_preventDefault_af59afb0f0a02e20: function(arg0) {
                arg0.preventDefault();
            },
            __wbg_protocol_c29b929bd710072b: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.protocol;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_prototypesetcall_bc27214492979395: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
            },
            __wbg_pushState_f02e0eae273f45f3: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.pushState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
            }, arguments); },
            __wbg_push_2baf45db356cf468: function(arg0, arg1) {
                const ret = arg0.push(arg1);
                return ret;
            },
            __wbg_queryCounterEXT_9016a6ffa350b4b2: function(arg0, arg1, arg2) {
                arg0.queryCounterEXT(arg1, arg2 >>> 0);
            },
            __wbg_querySelectorAll_6aebfe3df1fb2014: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.querySelectorAll(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_querySelector_ecbc2550705b235f: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_queueMicrotask_9833f9a49df95a49: function(arg0) {
                const ret = arg0.queueMicrotask;
                return ret;
            },
            __wbg_queueMicrotask_a72f977e97f23c5f: function(arg0) {
                queueMicrotask(arg0);
            },
            __wbg_queue_adce34608fd0c893: function(arg0) {
                const ret = arg0.queue;
                return ret;
            },
            __wbg_readBuffer_b5d9a34a2f3d20d5: function(arg0, arg1) {
                arg0.readBuffer(arg1 >>> 0);
            },
            __wbg_readPixels_31e44e70558ac590: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
            }, arguments); },
            __wbg_readPixels_3321086a7818a739: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
            }, arguments); },
            __wbg_readPixels_eb030cd9976eeca5: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
            }, arguments); },
            __wbg_read_2a943774344c9728: function(arg0) {
                const ret = arg0.read();
                return ret;
            },
            __wbg_reject_1548d2ad77237dc9: function(arg0) {
                const ret = Promise.reject(arg0);
                return ret;
            },
            __wbg_releaseLock_eb64cd83aa9fcfe4: function(arg0) {
                arg0.releaseLock();
            },
            __wbg_removeChild_3745fc2545da50fa: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.removeChild(arg1);
                return ret;
            }, arguments); },
            __wbg_removeEventListener_261678bfcbd90907: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4 !== 0);
            }, arguments); },
            __wbg_removeEventListener_6e68185345978771: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_removeItem_f7b602722ed566dd: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.removeItem(getStringFromWasm0(arg1, arg2));
            }, arguments); },
            __wbg_remove_9a5288388316028c: function(arg0) {
                arg0.remove();
            },
            __wbg_renderbufferStorageMultisample_ed16f3ef446e3bc7: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
            },
            __wbg_renderbufferStorage_52b131bbf3112b3a: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
            },
            __wbg_renderbufferStorage_bca487b0dea425b8: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
            },
            __wbg_replaceState_8814bbf1e44e1990: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.replaceState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
            }, arguments); },
            __wbg_requestAdapter_2e6718811c735a57: function(arg0, arg1) {
                const ret = arg0.requestAdapter(arg1);
                return ret;
            },
            __wbg_requestAdapter_fedd76261c649e55: function(arg0) {
                const ret = arg0.requestAdapter();
                return ret;
            },
            __wbg_requestAnimationFrame_7b526ab7aa550c74: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.requestAnimationFrame(arg1);
                return ret;
            }, arguments); },
            __wbg_requestDevice_ab46d0519ea1cc34: function(arg0, arg1) {
                const ret = arg0.requestDevice(arg1);
                return ret;
            },
            __wbg_reset_9814ed1978d299df: function() { return handleError(function (arg0) {
                arg0.reset();
            }, arguments); },
            __wbg_resolve_0076e10020304ede: function(arg0) {
                const ret = Promise.resolve(arg0);
                return ret;
            },
            __wbg_resolvedOptions_d055a38915c452e3: function(arg0) {
                const ret = arg0.resolvedOptions();
                return ret;
            },
            __wbg_respond_c102fabcc79e5ef0: function() { return handleError(function (arg0, arg1) {
                arg0.respond(arg1 >>> 0);
            }, arguments); },
            __wbg_resume_262977d0e323b264: function() { return handleError(function (arg0) {
                const ret = arg0.resume();
                return ret;
            }, arguments); },
            __wbg_right_1dca6be6342de981: function(arg0) {
                const ret = arg0.right;
                return ret;
            },
            __wbg_sampleRate_f1a896dec84704f9: function(arg0) {
                const ret = arg0.sampleRate;
                return ret;
            },
            __wbg_samplerParameterf_2d62cb907392e2d6: function(arg0, arg1, arg2, arg3) {
                arg0.samplerParameterf(arg1, arg2 >>> 0, arg3);
            },
            __wbg_samplerParameteri_a5615e67ed0b654b: function(arg0, arg1, arg2, arg3) {
                arg0.samplerParameteri(arg1, arg2 >>> 0, arg3);
            },
            __wbg_scissor_12ddc324094acd50: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.scissor(arg1, arg2, arg3, arg4);
            },
            __wbg_scissor_a9468482697c2bdb: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.scissor(arg1, arg2, arg3, arg4);
            },
            __wbg_searchParams_8c7a3f0cc72c149d: function(arg0) {
                const ret = arg0.searchParams;
                return ret;
            },
            __wbg_search_31c06ba77ebf51f4: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.search;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_selectionEnd_582c88abcc45a9f3: function() { return handleError(function (arg0) {
                const ret = arg0.selectionEnd;
                return isLikeNone(ret) ? Number.MAX_SAFE_INTEGER : (ret) >>> 0;
            }, arguments); },
            __wbg_selectionStart_b1db69e8858218c6: function() { return handleError(function (arg0) {
                const ret = arg0.selectionStart;
                return isLikeNone(ret) ? Number.MAX_SAFE_INTEGER : (ret) >>> 0;
            }, arguments); },
            __wbg_setAttribute_9e7d603908f63705: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_setBindGroup_268fd1714fff0ef5: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
            }, arguments); },
            __wbg_setBindGroup_f0de6cb2c7dbfc2c: function(arg0, arg1, arg2) {
                arg0.setBindGroup(arg1 >>> 0, arg2);
            },
            __wbg_setIndexBuffer_2531a9103450445e: function(arg0, arg1, arg2, arg3) {
                arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3);
            },
            __wbg_setIndexBuffer_7f3cf667b4d71566: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
            },
            __wbg_setItem_c5fb0966b484ecd3: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_setPipeline_c41bf46790f27f9e: function(arg0, arg1) {
                arg0.setPipeline(arg1);
            },
            __wbg_setProperty_097bc3d55ce44513: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_setScissorRect_42511fefb18b86ef: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_setTimeout_457d654f6a3adb91: function(arg0, arg1) {
                const ret = setTimeout(arg0, arg1);
                return ret;
            },
            __wbg_setTimeout_b4a9096784635514: function(arg0, arg1) {
                const ret = setTimeout(arg0, arg1);
                return ret;
            },
            __wbg_setTimeout_db7bbc18a17e152a: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_setVertexBuffer_1e448859663dd400: function(arg0, arg1, arg2, arg3) {
                arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
            },
            __wbg_setVertexBuffer_7cf533d694e747f3: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
            },
            __wbg_setViewport_d9fc3eac343de7d0: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
            },
            __wbg_set_145a351398b48c65: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(arg0, arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_315d6c6d8da88b31: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            },
            __wbg_set_34d08fd992d43d61: function(arg0, arg1, arg2) {
                arg0.set(arg1, arg2 >>> 0);
            },
            __wbg_set_575d3ddb70fe831d: function(arg0, arg1, arg2) {
                arg0.set(getArrayU8FromWasm0(arg1, arg2));
            },
            __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
                arg0[arg1] = arg2;
            },
            __wbg_set_a_88262a42340d0b1c: function(arg0, arg1) {
                arg0.a = arg1;
            },
            __wbg_set_accept_06d626c479e21e36: function(arg0, arg1, arg2) {
                arg0.accept = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_access_9a5092f05dc45fad: function(arg0, arg1) {
                arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
            },
            __wbg_set_address_mode_u_9e2695575a219e33: function(arg0, arg1) {
                arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
            },
            __wbg_set_address_mode_v_f479b2e6cccbcac4: function(arg0, arg1) {
                arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
            },
            __wbg_set_address_mode_w_46273e153230180d: function(arg0, arg1) {
                arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
            },
            __wbg_set_af5932e3f78b5648: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_set_alpha_bfd2df62e7bc581b: function(arg0, arg1) {
                arg0.alpha = arg1;
            },
            __wbg_set_alpha_mode_df805952892caa9c: function(arg0, arg1) {
                arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
            },
            __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: function(arg0, arg1) {
                arg0.alphaToCoverageEnabled = arg1 !== 0;
            },
            __wbg_set_array_layer_count_7312f0f31af94e7c: function(arg0, arg1) {
                arg0.arrayLayerCount = arg1 >>> 0;
            },
            __wbg_set_array_stride_f64_27ffaf4fffd74e61: function(arg0, arg1) {
                arg0.arrayStride = arg1;
            },
            __wbg_set_aspect_0d453bca3d012f02: function(arg0, arg1) {
                arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
            },
            __wbg_set_aspect_210da747c9d77aba: function(arg0, arg1) {
                arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
            },
            __wbg_set_aspect_4962514fe99e68e6: function(arg0, arg1) {
                arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
            },
            __wbg_set_attributes_7537844a7e6dafdc: function(arg0, arg1, arg2) {
                arg0.attributes = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_b_c47befe0af3261eb: function(arg0, arg1) {
                arg0.b = arg1;
            },
            __wbg_set_base_array_layer_f176bb9f1b37b342: function(arg0, arg1) {
                arg0.baseArrayLayer = arg1 >>> 0;
            },
            __wbg_set_base_mip_level_1df145d9f8db32a9: function(arg0, arg1) {
                arg0.baseMipLevel = arg1 >>> 0;
            },
            __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: function(arg0, arg1) {
                arg0.beginningOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_bind_group_layouts_5a9cfea401c020ab: function(arg0, arg1, arg2) {
                arg0.bindGroupLayouts = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_binding_155b0440b4307793: function(arg0, arg1) {
                arg0.binding = arg1 >>> 0;
            },
            __wbg_set_binding_f74df3510792aba1: function(arg0, arg1) {
                arg0.binding = arg1 >>> 0;
            },
            __wbg_set_blend_7493c2066c3e9970: function(arg0, arg1) {
                arg0.blend = arg1;
            },
            __wbg_set_body_1fb0f1008bfc7df6: function(arg0, arg1) {
                arg0.body = arg1;
            },
            __wbg_set_box_921bf38648f10dfe: function(arg0, arg1) {
                arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
            },
            __wbg_set_buffer_7ab48e13895631dc: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_buffer_9c01e3b6d6765ea2: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_buffer_c3410572051920ba: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_buffer_ef7f75306cf663ed: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_buffers_7d0d8f507699e956: function(arg0, arg1, arg2) {
                arg0.buffers = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_bytes_per_row_c54ca96953f35774: function(arg0, arg1) {
                arg0.bytesPerRow = arg1 >>> 0;
            },
            __wbg_set_bytes_per_row_d69b88eee3929c07: function(arg0, arg1) {
                arg0.bytesPerRow = arg1 >>> 0;
            },
            __wbg_set_cache_7507c4cc5938ccc7: function(arg0, arg1) {
                arg0.cache = __wbindgen_enum_RequestCache[arg1];
            },
            __wbg_set_className_541fce5cd31918aa: function(arg0, arg1, arg2) {
                arg0.className = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: function(arg0, arg1) {
                arg0.clearValue = arg1;
            },
            __wbg_set_code_b4f37f81f45b5b25: function(arg0, arg1, arg2) {
                arg0.code = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_codec_ed40ae22dc4e3c23: function(arg0, arg1, arg2) {
                arg0.codec = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_coded_height_8e3bbba2a977ebe0: function(arg0, arg1) {
                arg0.codedHeight = arg1 >>> 0;
            },
            __wbg_set_coded_width_674e7266b7356b62: function(arg0, arg1) {
                arg0.codedWidth = arg1 >>> 0;
            },
            __wbg_set_color_83aa977526e88cbb: function(arg0, arg1) {
                arg0.color = arg1;
            },
            __wbg_set_color_attachments_581fdb3310e4abfa: function(arg0, arg1, arg2) {
                arg0.colorAttachments = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_compare_cd9b62cdb92eb580: function(arg0, arg1) {
                arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
            },
            __wbg_set_compare_f36b34abfaa08ccb: function(arg0, arg1) {
                arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
            },
            __wbg_set_count_069a4eac409bac55: function(arg0, arg1) {
                arg0.count = arg1 >>> 0;
            },
            __wbg_set_create_4f5fb19abc6eb52a: function(arg0, arg1) {
                arg0.create = arg1 !== 0;
            },
            __wbg_set_create_55977c3183b4be6e: function(arg0, arg1) {
                arg0.create = arg1 !== 0;
            },
            __wbg_set_credentials_e0dcce31ca532b7d: function(arg0, arg1) {
                arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
            },
            __wbg_set_cull_mode_fc649853947a3d0c: function(arg0, arg1) {
                arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
            },
            __wbg_set_data_cfaec8acc3174ae1: function(arg0, arg1) {
                arg0.data = arg1;
            },
            __wbg_set_depth_bias_clamp_1c0d695df7f092e5: function(arg0, arg1) {
                arg0.depthBiasClamp = arg1;
            },
            __wbg_set_depth_bias_d7cd16096242a657: function(arg0, arg1) {
                arg0.depthBias = arg1;
            },
            __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: function(arg0, arg1) {
                arg0.depthBiasSlopeScale = arg1;
            },
            __wbg_set_depth_clear_value_beda3ec5b1a5c43a: function(arg0, arg1) {
                arg0.depthClearValue = arg1;
            },
            __wbg_set_depth_compare_0c8631eb2eae98e3: function(arg0, arg1) {
                arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
            },
            __wbg_set_depth_fail_op_668155ae33d3c06f: function(arg0, arg1) {
                arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
            },
            __wbg_set_depth_load_op_511c513eab4e56a9: function(arg0, arg1) {
                arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
            },
            __wbg_set_depth_or_array_layers_89371305ed0bd962: function(arg0, arg1) {
                arg0.depthOrArrayLayers = arg1 >>> 0;
            },
            __wbg_set_depth_read_only_7f41a74741c144ec: function(arg0, arg1) {
                arg0.depthReadOnly = arg1 !== 0;
            },
            __wbg_set_depth_stencil_97506c7bea4f53da: function(arg0, arg1) {
                arg0.depthStencil = arg1;
            },
            __wbg_set_depth_stencil_attachment_73b79e8b4e948222: function(arg0, arg1) {
                arg0.depthStencilAttachment = arg1;
            },
            __wbg_set_depth_store_op_c89f33b39b43361c: function(arg0, arg1) {
                arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
            },
            __wbg_set_depth_write_enabled_ce89750042940350: function(arg0, arg1) {
                arg0.depthWriteEnabled = arg1 !== 0;
            },
            __wbg_set_description_96d8a4d69f49308c: function(arg0, arg1) {
                arg0.description = arg1;
            },
            __wbg_set_device_e275d1d4f3c9eb74: function(arg0, arg1) {
                arg0.device = arg1;
            },
            __wbg_set_dimension_868eee80f4b90011: function(arg0, arg1) {
                arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
            },
            __wbg_set_dimension_e325282e613ca0a4: function(arg0, arg1) {
                arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
            },
            __wbg_set_download_327e0fbad75893f0: function(arg0, arg1, arg2) {
                arg0.download = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_dst_factor_ec7407f19be1aff9: function(arg0, arg1) {
                arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
            },
            __wbg_set_duration_f64_49bdf54bd76f95ae: function(arg0, arg1) {
                arg0.duration = arg1;
            },
            __wbg_set_end_of_pass_write_index_0d546e46b86ea069: function(arg0, arg1) {
                arg0.endOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_entries_86a29dd6291c95e7: function(arg0, arg1, arg2) {
                arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_entries_a12aca1e458b0456: function(arg0, arg1, arg2) {
                arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_entry_point_207540f042015ce5: function(arg0, arg1, arg2) {
                arg0.entryPoint = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_entry_point_e87e79251dd3144f: function(arg0, arg1, arg2) {
                arg0.entryPoint = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_error_e97906e3d5d8a297: function(arg0, arg1) {
                arg0.error = arg1;
            },
            __wbg_set_external_texture_386483d8dd82ab56: function(arg0, arg1) {
                arg0.externalTexture = arg1;
            },
            __wbg_set_fail_op_92f716dbc88b6973: function(arg0, arg1) {
                arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
            },
            __wbg_set_fillStyle_a2961b4d44e572af: function(arg0, arg1, arg2) {
                arg0.fillStyle = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_flip_y_4e1632b36ad0413a: function(arg0, arg1) {
                arg0.flipY = arg1 !== 0;
            },
            __wbg_set_font_1f60a05a2544a2ff: function(arg0, arg1, arg2) {
                arg0.font = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_format_1fcaa7d60546b490: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_format_2c1414a817c213f8: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_format_533f9ffa7eef563d: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_format_5d2f25cc93654ecc: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
            },
            __wbg_set_format_5ff53724ed6cedf2: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_format_815efd4dc4817bbb: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_format_e52bdcca880d2c8e: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_fragment_8b780f00a0b0e6f3: function(arg0, arg1) {
                arg0.fragment = arg1;
            },
            __wbg_set_front_face_28ffdf524eedce5b: function(arg0, arg1) {
                arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
            },
            __wbg_set_g_5983abfc46e0cf4e: function(arg0, arg1) {
                arg0.g = arg1;
            },
            __wbg_set_hardware_acceleration_c016d11df54fb9b6: function(arg0, arg1) {
                arg0.hardwareAcceleration = __wbindgen_enum_HardwareAcceleration[arg1];
            },
            __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: function(arg0, arg1) {
                arg0.hasDynamicOffset = arg1 !== 0;
            },
            __wbg_set_headers_40ad33dcf016613f: function(arg0, arg1) {
                arg0.headers = arg1;
            },
            __wbg_set_height_14335c4047cf9c1b: function(arg0, arg1) {
                arg0.height = arg1 >>> 0;
            },
            __wbg_set_height_c9789c1c77eaedff: function(arg0, arg1) {
                arg0.height = arg1 >>> 0;
            },
            __wbg_set_height_fde391767df1ce27: function(arg0, arg1) {
                arg0.height = arg1 >>> 0;
            },
            __wbg_set_href_f7219c6cbf6bedc3: function(arg0, arg1, arg2) {
                arg0.href = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_id_60955e6018d03b26: function(arg0, arg1, arg2) {
                arg0.id = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_innerHTML_7af59a832a09a074: function(arg0, arg1, arg2) {
                arg0.innerHTML = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_innerText_d46aad31465ed925: function(arg0, arg1, arg2) {
                arg0.innerText = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_integrity_26f89e5d26fc7ef5: function(arg0, arg1, arg2) {
                arg0.integrity = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_08d9be3e4719c226: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_17eb9fe3a02f62b0: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_48e6b787d256f621: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_547d0d4aec39fbe9: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_5ee7427342869829: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_60ad96c811e0d109: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_72bb4f41ef0cb893: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_79387decda299036: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_9556af8b5cda3c9d: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_d010f237b26f2c55: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_e16e2dbe51349c7f: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_e3944e54881b8c50: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_e922700240417ab5: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_layout_50ab727f44b38f26: function(arg0, arg1) {
                arg0.layout = arg1;
            },
            __wbg_set_layout_913d53c17194c989: function(arg0, arg1) {
                arg0.layout = arg1;
            },
            __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: function(arg0, arg1) {
                arg0.layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
            },
            __wbg_set_load_op_99661da6c4eab9b0: function(arg0, arg1) {
                arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
            },
            __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: function(arg0, arg1) {
                arg0.lodMaxClamp = arg1;
            },
            __wbg_set_lod_min_clamp_6d20c97916baeb93: function(arg0, arg1) {
                arg0.lodMinClamp = arg1;
            },
            __wbg_set_mag_filter_b5adebc99cb938e1: function(arg0, arg1) {
                arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
            },
            __wbg_set_mapped_at_creation_81b586dc90a50347: function(arg0, arg1) {
                arg0.mappedAtCreation = arg1 !== 0;
            },
            __wbg_set_mask_70a8a59ce09e5997: function(arg0, arg1) {
                arg0.mask = arg1 >>> 0;
            },
            __wbg_set_max_anisotropy_2beada0e2db62c45: function(arg0, arg1) {
                arg0.maxAnisotropy = arg1;
            },
            __wbg_set_method_dcb32343247ec427: function(arg0, arg1, arg2) {
                arg0.method = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_min_binding_size_f64_5005a6904cdf43da: function(arg0, arg1) {
                arg0.minBindingSize = arg1;
            },
            __wbg_set_min_filter_c72f17375e135f0a: function(arg0, arg1) {
                arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
            },
            __wbg_set_mip_level_13253f3afc7aa58a: function(arg0, arg1) {
                arg0.mipLevel = arg1 >>> 0;
            },
            __wbg_set_mip_level_count_534caaa7e68e68b8: function(arg0, arg1) {
                arg0.mipLevelCount = arg1 >>> 0;
            },
            __wbg_set_mip_level_count_776c8c218b65bc08: function(arg0, arg1) {
                arg0.mipLevelCount = arg1 >>> 0;
            },
            __wbg_set_mip_level_f7ac79e8c54f59ad: function(arg0, arg1) {
                arg0.mipLevel = arg1 >>> 0;
            },
            __wbg_set_mipmap_filter_5bf66195a3639700: function(arg0, arg1) {
                arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
            },
            __wbg_set_mode_74e772635acb96ec: function(arg0, arg1) {
                arg0.mode = __wbindgen_enum_RequestMode[arg1];
            },
            __wbg_set_mode_9990b3393ba469ae: function(arg0, arg1) {
                arg0.mode = __wbindgen_enum_GpuCanvasToneMappingMode[arg1];
            },
            __wbg_set_module_d0e2098713606cae: function(arg0, arg1) {
                arg0.module = arg1;
            },
            __wbg_set_module_f02e076ca7e7daf8: function(arg0, arg1) {
                arg0.module = arg1;
            },
            __wbg_set_multiple_fdd0574cdb0b0a1f: function(arg0, arg1) {
                arg0.multiple = arg1 !== 0;
            },
            __wbg_set_multisample_37ddafe88b5cd466: function(arg0, arg1) {
                arg0.multisample = arg1;
            },
            __wbg_set_multisampled_7913fd7183272840: function(arg0, arg1) {
                arg0.multisampled = arg1 !== 0;
            },
            __wbg_set_name_2c630595dc90a7aa: function(arg0, arg1, arg2) {
                arg0.name = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_offset_f64_28c24dc15000932e: function(arg0, arg1) {
                arg0.offset = arg1;
            },
            __wbg_set_offset_f64_89f0ce01a689839e: function(arg0, arg1) {
                arg0.offset = arg1;
            },
            __wbg_set_offset_f64_b562d1367e34ef93: function(arg0, arg1) {
                arg0.offset = arg1;
            },
            __wbg_set_offset_f64_fa66068813376ca3: function(arg0, arg1) {
                arg0.offset = arg1;
            },
            __wbg_set_once_8c45bbbfb71d1b34: function(arg0, arg1) {
                arg0.once = arg1 !== 0;
            },
            __wbg_set_onclick_c978dc4919c3c885: function(arg0, arg1) {
                arg0.onclick = arg1;
            },
            __wbg_set_onended_a562c0d904e528ee: function(arg0, arg1) {
                arg0.onended = arg1;
            },
            __wbg_set_onstatechange_e09c9295ff87c268: function(arg0, arg1) {
                arg0.onstatechange = arg1;
            },
            __wbg_set_onuncapturederror_c8a77eb8695205a0: function(arg0, arg1) {
                arg0.onuncapturederror = arg1;
            },
            __wbg_set_operation_62ce44e1728c4047: function(arg0, arg1) {
                arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
            },
            __wbg_set_optimize_for_latency_fd3b7b1c37948f61: function(arg0, arg1) {
                arg0.optimizeForLatency = arg1 !== 0;
            },
            __wbg_set_origin_gpu_origin_2d_dict_1240202973e56f92: function(arg0, arg1) {
                arg0.origin = arg1;
            },
            __wbg_set_origin_gpu_origin_3d_dict_37222d7b3d238123: function(arg0, arg1) {
                arg0.origin = arg1;
            },
            __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: function(arg0, arg1) {
                arg0.origin = arg1;
            },
            __wbg_set_output_1c36a2ff0dfde551: function(arg0, arg1) {
                arg0.output = arg1;
            },
            __wbg_set_pass_op_cf02fa088d6352a7: function(arg0, arg1) {
                arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
            },
            __wbg_set_power_preference_8fdca0b7af640d49: function(arg0, arg1) {
                arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
            },
            __wbg_set_premultiplied_alpha_3f27816ad319d5a9: function(arg0, arg1) {
                arg0.premultipliedAlpha = arg1 !== 0;
            },
            __wbg_set_prevent_scroll_aaa386836725b8b4: function(arg0, arg1) {
                arg0.preventScroll = arg1 !== 0;
            },
            __wbg_set_primitive_43c23761a55b4088: function(arg0, arg1) {
                arg0.primitive = arg1;
            },
            __wbg_set_query_set_41de86d2401aee04: function(arg0, arg1) {
                arg0.querySet = arg1;
            },
            __wbg_set_r_c6f4c68f4804d655: function(arg0, arg1) {
                arg0.r = arg1;
            },
            __wbg_set_redirect_cc128ab2411da334: function(arg0, arg1) {
                arg0.redirect = __wbindgen_enum_RequestRedirect[arg1];
            },
            __wbg_set_referrer_efd0fb956d6b70b2: function(arg0, arg1, arg2) {
                arg0.referrer = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_referrer_policy_465382f52c1a03d3: function(arg0, arg1) {
                arg0.referrerPolicy = __wbindgen_enum_ReferrerPolicy[arg1];
            },
            __wbg_set_required_features_1baf274a8669db60: function(arg0, arg1, arg2) {
                arg0.requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_required_limits_871ed33c68613dcb: function(arg0, arg1) {
                arg0.requiredLimits = arg1;
            },
            __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: function(arg0, arg1) {
                arg0.resolveTarget = arg1;
            },
            __wbg_set_resource_5ae7b5e67924f234: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_rows_per_image_5011f97318ee71af: function(arg0, arg1) {
                arg0.rowsPerImage = arg1 >>> 0;
            },
            __wbg_set_rows_per_image_59a813ac5006e10e: function(arg0, arg1) {
                arg0.rowsPerImage = arg1 >>> 0;
            },
            __wbg_set_sample_count_eb86a8b18545b54f: function(arg0, arg1) {
                arg0.sampleCount = arg1 >>> 0;
            },
            __wbg_set_sample_rate_b1db9f69dace8e15: function(arg0, arg1) {
                arg0.sampleRate = arg1;
            },
            __wbg_set_sample_type_c32e1dfff94e63eb: function(arg0, arg1) {
                arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
            },
            __wbg_set_sampler_c0e1258543a33bce: function(arg0, arg1) {
                arg0.sampler = arg1;
            },
            __wbg_set_shader_location_7e1832a74f912217: function(arg0, arg1) {
                arg0.shaderLocation = arg1 >>> 0;
            },
            __wbg_set_signal_2dbd377604627f26: function(arg0, arg1) {
                arg0.signal = arg1;
            },
            __wbg_set_size_f64_6bcd40704bf4cfdc: function(arg0, arg1) {
                arg0.size = arg1;
            },
            __wbg_set_size_f64_8b8f6bba5d678162: function(arg0, arg1) {
                arg0.size = arg1;
            },
            __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: function(arg0, arg1) {
                arg0.size = arg1;
            },
            __wbg_set_source_0c40b87cfdd5d704: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_html_canvas_element_f657e39507ba2fe5: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_html_image_element_fcc7cba0635adac1: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_html_video_element_e63a39653665f651: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_image_data_68478f1afce208b8: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_offscreen_canvas_266a3de949693e62: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_source_video_frame_3083c0ce54b9cb73: function(arg0, arg1) {
                arg0.source = arg1;
            },
            __wbg_set_src_factor_9bfe84af9b7b5cac: function(arg0, arg1) {
                arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
            },
            __wbg_set_stencil_back_85b22f1db5b1940a: function(arg0, arg1) {
                arg0.stencilBack = arg1;
            },
            __wbg_set_stencil_clear_value_42be608809151e2a: function(arg0, arg1) {
                arg0.stencilClearValue = arg1 >>> 0;
            },
            __wbg_set_stencil_front_525526164a798a44: function(arg0, arg1) {
                arg0.stencilFront = arg1;
            },
            __wbg_set_stencil_load_op_31838c036993098a: function(arg0, arg1) {
                arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
            },
            __wbg_set_stencil_read_mask_5cc26495e8b3ae82: function(arg0, arg1) {
                arg0.stencilReadMask = arg1 >>> 0;
            },
            __wbg_set_stencil_read_only_bf1d0c1897e25c62: function(arg0, arg1) {
                arg0.stencilReadOnly = arg1 !== 0;
            },
            __wbg_set_stencil_store_op_e6be1cbc3a8fc210: function(arg0, arg1) {
                arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
            },
            __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: function(arg0, arg1) {
                arg0.stencilWriteMask = arg1 >>> 0;
            },
            __wbg_set_step_mode_a97bb24714da41a9: function(arg0, arg1) {
                arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
            },
            __wbg_set_storage_texture_939a097db4b18bd4: function(arg0, arg1) {
                arg0.storageTexture = arg1;
            },
            __wbg_set_store_op_b5fdf672436f13f3: function(arg0, arg1) {
                arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
            },
            __wbg_set_strip_index_format_9f787be6c5fc9e87: function(arg0, arg1) {
                arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
            },
            __wbg_set_tabIndex_6999832ea5d5197e: function(arg0, arg1) {
                arg0.tabIndex = arg1;
            },
            __wbg_set_targets_c38bd200c836d66f: function(arg0, arg1, arg2) {
                arg0.targets = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_textBaseline_d5ba548751584f49: function(arg0, arg1, arg2) {
                arg0.textBaseline = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_texture_016561d5911339e5: function(arg0, arg1) {
                arg0.texture = arg1;
            },
            __wbg_set_texture_1f64653a5d2d7b4d: function(arg0, arg1) {
                arg0.texture = arg1;
            },
            __wbg_set_texture_9dcedde1bb31eda6: function(arg0, arg1) {
                arg0.texture = arg1;
            },
            __wbg_set_timestamp_6e8a3d77568933dd: function(arg0, arg1) {
                arg0.timestamp = arg1;
            },
            __wbg_set_timestamp_70c7f5f6c51e6872: function(arg0, arg1) {
                arg0.timestamp = arg1;
            },
            __wbg_set_timestamp_f64_364296f627f55388: function(arg0, arg1) {
                arg0.timestamp = arg1;
            },
            __wbg_set_timestamp_writes_98bed1a8bbc6682d: function(arg0, arg1) {
                arg0.timestampWrites = arg1;
            },
            __wbg_set_tone_mapping_b3464f1baa4cff92: function(arg0, arg1) {
                arg0.toneMapping = arg1;
            },
            __wbg_set_topology_da25f2cc5af203d2: function(arg0, arg1) {
                arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
            },
            __wbg_set_type_19b6e3a56c3fa1f1: function(arg0, arg1, arg2) {
                arg0.type = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_type_1a91aca18d1b70c7: function(arg0, arg1) {
                arg0.type = __wbindgen_enum_EncodedVideoChunkType[arg1];
            },
            __wbg_set_type_ccf8472d40abcddf: function(arg0, arg1) {
                arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
            },
            __wbg_set_type_d09829f59932a0fc: function(arg0, arg1) {
                arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
            },
            __wbg_set_type_dcf75b2afa60c694: function(arg0, arg1, arg2) {
                arg0.type = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_unclipped_depth_04524a2b44e1e3c1: function(arg0, arg1) {
                arg0.unclippedDepth = arg1 !== 0;
            },
            __wbg_set_usage_a137f82ca163b0a9: function(arg0, arg1) {
                arg0.usage = arg1 >>> 0;
            },
            __wbg_set_usage_b2a2935f37bf3d08: function(arg0, arg1) {
                arg0.usage = arg1 >>> 0;
            },
            __wbg_set_usage_ba5b0f8b333ab325: function(arg0, arg1) {
                arg0.usage = arg1 >>> 0;
            },
            __wbg_set_usage_ddd42599bbba7779: function(arg0, arg1) {
                arg0.usage = arg1 >>> 0;
            },
            __wbg_set_value_fbd659f94bfb9181: function(arg0, arg1, arg2) {
                arg0.value = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_vertex_0be5d146f9ff6f36: function(arg0, arg1) {
                arg0.vertex = arg1;
            },
            __wbg_set_view_dimension_0df554032f1f3a85: function(arg0, arg1) {
                arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
            },
            __wbg_set_view_dimension_4818d4c18ce5815e: function(arg0, arg1) {
                arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
            },
            __wbg_set_view_formats_4347dc8363331086: function(arg0, arg1, arg2) {
                arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_view_formats_5797d2fff3c11808: function(arg0, arg1, arg2) {
                arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: function(arg0, arg1) {
                arg0.view = arg1;
            },
            __wbg_set_view_gpu_texture_view_c0f35f8857c25206: function(arg0, arg1) {
                arg0.view = arg1;
            },
            __wbg_set_visibility_9570b037224c4cc2: function(arg0, arg1) {
                arg0.visibility = arg1 >>> 0;
            },
            __wbg_set_width_0ca908d167690992: function(arg0, arg1) {
                arg0.width = arg1 >>> 0;
            },
            __wbg_set_width_9f685402c2cbee70: function(arg0, arg1) {
                arg0.width = arg1 >>> 0;
            },
            __wbg_set_width_b0e1267db4b196b5: function(arg0, arg1) {
                arg0.width = arg1 >>> 0;
            },
            __wbg_set_write_mask_d45279e56abbfcb5: function(arg0, arg1) {
                arg0.writeMask = arg1 >>> 0;
            },
            __wbg_set_x_232d24fdc32d8351: function(arg0, arg1) {
                arg0.x = arg1 >>> 0;
            },
            __wbg_set_x_876d592971db129a: function(arg0, arg1) {
                arg0.x = arg1 >>> 0;
            },
            __wbg_set_y_18fe375093e59dfb: function(arg0, arg1) {
                arg0.y = arg1 >>> 0;
            },
            __wbg_set_y_2b1f5ac0dd5586a5: function(arg0, arg1) {
                arg0.y = arg1 >>> 0;
            },
            __wbg_set_z_ef005d82bc9d24e3: function(arg0, arg1) {
                arg0.z = arg1 >>> 0;
            },
            __wbg_shaderSource_06379dac249994dd: function(arg0, arg1, arg2, arg3) {
                arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
            },
            __wbg_shaderSource_c8812639b47d87b9: function(arg0, arg1, arg2, arg3) {
                arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
            },
            __wbg_shiftKey_be6d5295ee392b33: function(arg0) {
                const ret = arg0.shiftKey;
                return ret;
            },
            __wbg_shiftKey_ecdc496db72e8a50: function(arg0) {
                const ret = arg0.shiftKey;
                return ret;
            },
            __wbg_signal_e5a49a2d9c65b7f6: function(arg0) {
                const ret = arg0.signal;
                return ret;
            },
            __wbg_size_79acc354d385bbfe: function(arg0) {
                const ret = arg0.size;
                return ret;
            },
            __wbg_size_8f1c0b1a1fbb3810: function(arg0) {
                const ret = arg0.size;
                return ret;
            },
            __wbg_slice_6da4cdc5d543fcd0: function(arg0, arg1) {
                const ret = arg1.slice();
                const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_slice_afd8274aed4149c0: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.slice(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_stack_3a6edbcc371f3e13: function(arg0, arg1) {
                const ret = arg1.stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_stack_5759e783069063db: function(arg0, arg1) {
                const ret = arg1.stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_start_12f5fef12bb396ee: function() { return handleError(function (arg0) {
                arg0.start();
            }, arguments); },
            __wbg_start_264a5af8edc308ae: function() { return handleError(function (arg0, arg1) {
                arg0.start(arg1);
            }, arguments); },
            __wbg_state_3c9c898078a3a8f9: function() { return handleError(function (arg0) {
                const ret = arg0.state;
                return ret;
            }, arguments); },
            __wbg_state_54551b9345fb007f: function(arg0) {
                const ret = arg0.state;
                return (__wbindgen_enum_AudioContextState.indexOf(ret) + 1 || 4) - 1;
            },
            __wbg_state_87bb61ed2d0af787: function(arg0) {
                const ret = arg0.state;
                return (__wbindgen_enum_CodecState.indexOf(ret) + 1 || 4) - 1;
            },
            __wbg_state_9a6e03e72478acf5: function(arg0) {
                const ret = arg0.state;
                return ret;
            },
            __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_0b583911f537483a: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_statusText_bceed558320dd590: function(arg0, arg1) {
                const ret = arg1.statusText;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_status_ce0a98d3c57125f3: function(arg0) {
                const ret = arg0.status;
                return ret;
            },
            __wbg_stencilFuncSeparate_3f31dcd12a0d4785: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
            },
            __wbg_stencilFuncSeparate_f168b66c597aa85f: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
            },
            __wbg_stencilMaskSeparate_b30c097ea6b98504: function(arg0, arg1, arg2) {
                arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_stencilMaskSeparate_ff739f8711e9fd42: function(arg0, arg1, arg2) {
                arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_stencilMask_9e18cc018897c747: function(arg0, arg1) {
                arg0.stencilMask(arg1 >>> 0);
            },
            __wbg_stencilMask_a22be64c66abd825: function(arg0, arg1) {
                arg0.stencilMask(arg1 >>> 0);
            },
            __wbg_stencilOpSeparate_7d01185cbdb89d99: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_stencilOpSeparate_c5af5f5dbd237bea: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
            },
            __wbg_stopPropagation_effafbc3bc773f1c: function(arg0) {
                arg0.stopPropagation();
            },
            __wbg_stop_5bb124fd4e4d0ad6: function() { return handleError(function (arg0) {
                arg0.stop();
            }, arguments); },
            __wbg_storage_f32f42a5cc35294c: function(arg0) {
                const ret = arg0.storage;
                return ret;
            },
            __wbg_stream_4bed61a7503885e5: function(arg0) {
                const ret = arg0.stream();
                return ret;
            },
            __wbg_structuredClone_5ea9d94c7e75fca9: function() { return handleError(function (arg0) {
                const ret = window.structuredClone(arg0);
                return ret;
            }, arguments); },
            __wbg_style_4bce24230e493a7c: function(arg0) {
                const ret = arg0.style;
                return ret;
            },
            __wbg_subgroupMaxSize_1527c5f7a8fe91bb: function(arg0) {
                const ret = arg0.subgroupMaxSize;
                return ret;
            },
            __wbg_subgroupMinSize_d6c5ad4bddc828e9: function(arg0) {
                const ret = arg0.subgroupMinSize;
                return ret;
            },
            __wbg_submit_ce44115121cd166c: function(arg0, arg1, arg2) {
                arg0.submit(getArrayJsValueViewFromWasm0(arg1, arg2));
            },
            __wbg_texImage2D_82bf2b4c8aa9a1db: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texImage2D_a856af552acdc9d9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texImage2D_ca3d0fe24620ec85: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texImage3D_29a847f33877ed12: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
                arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
            }, arguments); },
            __wbg_texImage3D_78fb39719c620063: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
                arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
            }, arguments); },
            __wbg_texParameteri_647fdb1426809cb5: function(arg0, arg1, arg2, arg3) {
                arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
            },
            __wbg_texParameteri_7864076abcdb03e0: function(arg0, arg1, arg2, arg3) {
                arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
            },
            __wbg_texStorage2D_cf2bd991072d9efb: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
            },
            __wbg_texStorage3D_74b701c2b176380c: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
            },
            __wbg_texSubImage2D_07337d0974e99c39: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_196472d4111ce5b6: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_24cf5097ebaa84cc: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_31a0c2797aa04f32: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_5e90c7a719d40256: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_64e36398b8f046ac: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_a0c44917af35af17: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_bb322aae90f7657f: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage2D_d7bffff06a3b8315: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
            }, arguments); },
            __wbg_texSubImage3D_001f2e62ed945b72: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_5143d5af7e182ddc: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_53c6014e2d129891: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_5d773fc7a8cd4d08: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_adb96e37e6949ec9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_d4e74595e01f7f71: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_d78e9f0f67a9f373: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_texSubImage3D_e0d113b7047a5130: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
                arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
            }, arguments); },
            __wbg_text_ff3f476b3d6b1246: function() { return handleError(function (arg0) {
                const ret = arg0.text();
                return ret;
            }, arguments); },
            __wbg_then_c949d5a25a4e78f8: function(arg0, arg1, arg2) {
                const ret = arg0.then(arg1, arg2);
                return ret;
            },
            __wbg_then_e71170d78fcf8954: function(arg0, arg1) {
                const ret = arg0.then(arg1);
                return ret;
            },
            __wbg_timestamp_d747155251495239: function(arg0) {
                const ret = arg0.timestamp;
                return ret;
            },
            __wbg_toString_0a6162345e699dea: function(arg0) {
                const ret = arg0.toString();
                return ret;
            },
            __wbg_toString_83fab3d7c865ecd3: function(arg0) {
                const ret = arg0.toString();
                return ret;
            },
            __wbg_top_ff4627294d2cdeb8: function(arg0) {
                const ret = arg0.top;
                return ret;
            },
            __wbg_touches_7b36d35cdb1673fa: function(arg0) {
                const ret = arg0.touches;
                return ret;
            },
            __wbg_type_d44713a24aa37493: function(arg0, arg1) {
                const ret = arg1.type;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_unconfigure_0a07a0a40de8988d: function(arg0) {
                arg0.unconfigure();
            },
            __wbg_uniform1f_9cfecfaeb8cf43c1: function(arg0, arg1, arg2) {
                arg0.uniform1f(arg1, arg2);
            },
            __wbg_uniform1f_b5856e35a43b65a1: function(arg0, arg1, arg2) {
                arg0.uniform1f(arg1, arg2);
            },
            __wbg_uniform1i_531b98c4a7177366: function(arg0, arg1, arg2) {
                arg0.uniform1i(arg1, arg2);
            },
            __wbg_uniform1i_fc2dc8cadc49d8ec: function(arg0, arg1, arg2) {
                arg0.uniform1i(arg1, arg2);
            },
            __wbg_uniform1ui_353c67ec681b540c: function(arg0, arg1, arg2) {
                arg0.uniform1ui(arg1, arg2 >>> 0);
            },
            __wbg_uniform2fv_319c49f0ce340f26: function(arg0, arg1, arg2, arg3) {
                arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform2fv_a7d3c1830d18c1b2: function(arg0, arg1, arg2, arg3) {
                arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform2iv_65f36fc9777697d7: function(arg0, arg1, arg2, arg3) {
                arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform2iv_ca9cb507409b9ad1: function(arg0, arg1, arg2, arg3) {
                arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform2uiv_c95af5fb653ccb86: function(arg0, arg1, arg2, arg3) {
                arg0.uniform2uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
            },
            __wbg_uniform3fv_055ea5ac38af4fce: function(arg0, arg1, arg2, arg3) {
                arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform3fv_58520ffe22a6e27c: function(arg0, arg1, arg2, arg3) {
                arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform3iv_0590e8b7eff2a791: function(arg0, arg1, arg2, arg3) {
                arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform3iv_e91b1410dc299f50: function(arg0, arg1, arg2, arg3) {
                arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform3uiv_9992491000463a52: function(arg0, arg1, arg2, arg3) {
                arg0.uniform3uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
            },
            __wbg_uniform4f_22bfec882308eec2: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
            },
            __wbg_uniform4f_8dd8f311e656ca0d: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
            },
            __wbg_uniform4fv_3ef2f5121fcb78ae: function(arg0, arg1, arg2, arg3) {
                arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform4fv_cf8ff646c36232c8: function(arg0, arg1, arg2, arg3) {
                arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
            },
            __wbg_uniform4iv_6fc5436b4f876039: function(arg0, arg1, arg2, arg3) {
                arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform4iv_99c2b07787d362d6: function(arg0, arg1, arg2, arg3) {
                arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
            },
            __wbg_uniform4uiv_a6fb3237d9df7ed4: function(arg0, arg1, arg2, arg3) {
                arg0.uniform4uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
            },
            __wbg_uniformBlockBinding_07116582301fb019: function(arg0, arg1, arg2, arg3) {
                arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
            },
            __wbg_uniformMatrix2fv_34b2245136106a2f: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix2fv_611c7fcb378f057e: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix2x3fv_6b33a76d09b6c00f: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix2x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix2x4fv_66c787e2d0a5dd0a: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix2x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix3fv_472e7824735acce1: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix3fv_83fdc9c3c0d43204: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix3x2fv_33df849b78b8556e: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix3x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix3x4fv_8914dc5121a813b4: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix3x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix4fv_dff9738d995fd0b1: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix4fv_e691d7f14d3609f7: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix4x2fv_1c9ccf4427b82548: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix4x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_uniformMatrix4x3fv_a84b16e0a7abee2c: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix4x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_unmap_adaf93276fdf9aaf: function(arg0) {
                arg0.unmap();
            },
            __wbg_url_8e28edeab4cd6bed: function(arg0, arg1) {
                const ret = arg1.url;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_usage_437399485b209edf: function(arg0) {
                const ret = arg0.usage;
                return ret;
            },
            __wbg_useProgram_5bdae58fd9f9826f: function(arg0, arg1) {
                arg0.useProgram(arg1);
            },
            __wbg_useProgram_e075c2902e420761: function(arg0, arg1) {
                arg0.useProgram(arg1);
            },
            __wbg_userActivation_25695ccbfe2622d4: function(arg0) {
                const ret = arg0.userActivation;
                return ret;
            },
            __wbg_userAgent_cde4c65cc98db425: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.userAgent;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_valueOf_02fd4d101b7553c7: function(arg0) {
                const ret = arg0.valueOf();
                return ret;
            },
            __wbg_value_05305a761dfa3e0e: function(arg0, arg1) {
                const ret = arg1.value;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_value_f3c585ee8f5ba40c: function(arg0) {
                const ret = arg0.value;
                return ret;
            },
            __wbg_vertexAttribDivisorANGLE_659fb027198a47c3: function(arg0, arg1, arg2) {
                arg0.vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_vertexAttribDivisor_7575d382215322f7: function(arg0, arg1, arg2) {
                arg0.vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
            },
            __wbg_vertexAttribIPointer_fc8057c62cfcc63c: function(arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
            },
            __wbg_vertexAttribPointer_24b495e18df325dc: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
            },
            __wbg_vertexAttribPointer_54d56b18f71a946d: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
            },
            __wbg_videoHeight_4070b88110b1ac0d: function(arg0) {
                const ret = arg0.videoHeight;
                return ret;
            },
            __wbg_videoWidth_ea74d0fb1493f025: function(arg0) {
                const ret = arg0.videoWidth;
                return ret;
            },
            __wbg_view_9c570f33e8d6ab96: function(arg0) {
                const ret = arg0.view;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_viewport_16936692526e2ce6: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.viewport(arg1, arg2, arg3, arg4);
            },
            __wbg_viewport_e35d16c542d2ce70: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.viewport(arg1, arg2, arg3, arg4);
            },
            __wbg_warn_13abc63e0d4b3527: function(arg0) {
                console.warn(arg0);
            },
            __wbg_warn_88929063e36ba285: function(arg0, arg1, arg2, arg3) {
                console.warn(arg0, arg1, arg2, arg3);
            },
            __wbg_width_3b5d66c5eac1eb28: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_3d0dce3d9892e35e: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_7a1b335e4a553dc3: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_8a9cc26363f10d5f: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_bf3733dbc880874d: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_c9bfe09197f3b26e: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_width_e95ad291d52fe17e: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbg_writeBuffer_8b5bd251a89198bc: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.writeBuffer(arg1, arg2, getArrayU8FromWasm0(arg3, arg4), arg5, arg6);
            }, arguments); },
            __wbg_writeText_79a2b37e525e9424: function(arg0, arg1, arg2) {
                const ret = arg0.writeText(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_writeTexture_53ba204c494b042c: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.writeTexture(arg1, getArrayU8FromWasm0(arg2, arg3), arg4, arg5);
            }, arguments); },
            __wbg_write_f88c29d142d623bd: function(arg0, arg1) {
                const ret = arg0.write(arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 101, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true_);
                return ret;
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true_);
                return ret;
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__33);
                return ret;
            },
            __wbindgen_generic_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Error")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__34);
                return ret;
            },
            __wbindgen_generic_0000000000000005: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__35);
                return ret;
            },
            __wbindgen_generic_0000000000000006: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 101, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__36);
                return ret;
            },
            __wbindgen_generic_0000000000000007: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUUncapturedErrorEvent")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__37);
                return ret;
            },
            __wbindgen_generic_0000000000000008: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PopStateEvent")], shim_idx: 101, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__38);
                return ret;
            },
            __wbindgen_generic_0000000000000009: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("StorageEvent")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__39);
                return ret;
            },
            __wbindgen_generic_000000000000000a: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("VideoFrame")], shim_idx: 240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__40);
                return ret;
            },
            __wbindgen_generic_000000000000000b: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 101, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__41);
                return ret;
            },
            __wbindgen_generic_000000000000000c: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 101, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__42);
                return ret;
            },
            __wbindgen_generic_000000000000000d: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 1489, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsValue___true_);
                return ret;
            },
            __wbindgen_generic_000000000000000e: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 564, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke_______true_);
                return ret;
            },
            __wbindgen_generic_000000000000000f: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return ret;
            },
            __wbindgen_generic_0000000000000010: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
                const ret = getArrayF32FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000011: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
                const ret = getArrayI16FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000012: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
                const ret = getArrayI32FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000013: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
                const ret = getArrayI8FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000014: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
                const ret = getArrayU16FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000015: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
                const ret = getArrayU32FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000016: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000017: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000018: function(arg0, arg1) {
                var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
                wasm.__wbindgen_free(arg0, arg1 * 1, 1);
                // Cast intrinsic for `Vector(U8) -> Externref`.
                const ret = v0;
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                const offset = table.grow(4);
                table.set(0, undefined);
                table.set(offset + 0, undefined);
                table.set(offset + 1, null);
                table.set(offset + 2, true);
                table.set(offset + 3, false);
            },
        };
        return {
            __proto__: null,
            "./re_viewer_bg.js": import0,
        };
    }

    const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));
    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke_______true_(arg0, arg1) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke_______true_(arg0, arg1);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsValue___true_(arg0, arg1) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsValue___true_(arg0, arg1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true_(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true_(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__33(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__33(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__34(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__34(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__35(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__35(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__37(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__37(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__39(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__39(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__40(arg0, arg1, arg2) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___JsValue______true__40(arg0, arg1, arg2);
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true_(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true_(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__36(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__36(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__38(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__38(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__41(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__41(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__42(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___wasm_bindgen_6d4fe21a5ce6a1f1___sys__JsOption_wgpu_525b572505b7333e___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_6d4fe21a5ce6a1f1___JsError___true__42(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
        wasm.wasm_bindgen_6d4fe21a5ce6a1f1___convert__closures_____invoke___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined___js_sys_e032c32c84ae6e91___Function_fn_wasm_bindgen_6d4fe21a5ce6a1f1___JsValue_____wasm_bindgen_6d4fe21a5ce6a1f1___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
    }


    const __wbindgen_enum_AudioContextState = ["suspended", "running", "closed"];


    const __wbindgen_enum_CodecState = ["unconfigured", "configured", "closed"];


    const __wbindgen_enum_EncodedVideoChunkType = ["key", "delta"];


    const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];


    const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


    const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


    const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


    const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];


    const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


    const __wbindgen_enum_GpuCanvasToneMappingMode = ["standard", "extended"];


    const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


    const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


    const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];


    const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


    const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


    const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


    const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];


    const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


    const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


    const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];


    const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


    const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];


    const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


    const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


    const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];


    const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


    const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];


    const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


    const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


    const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];


    const __wbindgen_enum_HardwareAcceleration = ["no-preference", "prefer-hardware", "prefer-software"];


    const __wbindgen_enum_ReadableStreamType = ["bytes"];


    const __wbindgen_enum_ReferrerPolicy = ["", "no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url", "same-origin", "strict-origin", "strict-origin-when-cross-origin"];


    const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


    const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


    const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];


    const __wbindgen_enum_RequestRedirect = ["follow", "error", "manual"];


    const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];
    const IntoUnderlyingByteSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingbytesource_free(ptr, 1));
    const IntoUnderlyingSinkFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsink_free(ptr, 1));
    const IntoUnderlyingSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsource_free(ptr, 1));
    const WebHandleFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_webhandle_free(ptr, 1));

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function getArrayF32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayI16FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
    }

    function getArrayI32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayI8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    function getArrayJsValueViewFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        const mem = getDataViewMemory0();
        const result = [];
        for (let i = ptr; i < ptr + 4 * len; i += 4) {
            result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
        }
        return result;
    }

    function getArrayU16FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
    }

    function getArrayU32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    let cachedFloat32ArrayMemory0 = null;
    function getFloat32ArrayMemory0() {
        if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
            cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
        }
        return cachedFloat32ArrayMemory0;
    }

    let cachedInt16ArrayMemory0 = null;
    function getInt16ArrayMemory0() {
        if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
            cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
        }
        return cachedInt16ArrayMemory0;
    }

    let cachedInt32ArrayMemory0 = null;
    function getInt32ArrayMemory0() {
        if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
            cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachedInt32ArrayMemory0;
    }

    let cachedInt8ArrayMemory0 = null;
    function getInt8ArrayMemory0() {
        if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
            cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
        }
        return cachedInt8ArrayMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        return decodeText(ptr >>> 0, len);
    }

    let cachedUint16ArrayMemory0 = null;
    function getUint16ArrayMemory0() {
        if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
            cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
        }
        return cachedUint16ArrayMemory0;
    }

    let cachedUint32ArrayMemory0 = null;
    function getUint32ArrayMemory0() {
        if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
            cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
        }
        return cachedUint32ArrayMemory0;
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeMutClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_destroy_closure(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passArray8ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 1, 1) >>> 0;
        getUint8ArrayMemory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function passArrayJsValueToWasm0(array, malloc) {
        const ptr = malloc(array.length * 4, 4) >>> 0;
        for (let i = 0; i < array.length; i++) {
            const add = addToExternrefTable0(array[i]);
            getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
        }
        WASM_VECTOR_LEN = array.length;
        return ptr;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedFloat32ArrayMemory0 = null;
        cachedInt16ArrayMemory0 = null;
        cachedInt32ArrayMemory0 = null;
        cachedInt8ArrayMemory0 = null;
        cachedUint16ArrayMemory0 = null;
        cachedUint32ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }


        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
