// Example scene shader for the format guide: the picture shimmers in thin horizontal bands.
// The engine compiles scene shaders from E5 2.4; until then frames are drawn without them.
// The inputs the engine gives a scene shader (time, size, pictures) are listed in the format guide.

float4 Shade(float2 uv)
{
    float shift = sin(uv.y * 80 + Time * 6.2831853) * 0.002;
    return Input0.SampleLevel(LinearClamp, uv + float2(shift, 0), 0);
}
