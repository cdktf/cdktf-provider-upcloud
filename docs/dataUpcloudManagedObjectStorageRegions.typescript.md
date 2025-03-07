# `dataUpcloudManagedObjectStorageRegions` Submodule <a name="`dataUpcloudManagedObjectStorageRegions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedObjectStorageRegions <a name="DataUpcloudManagedObjectStorageRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/data-sources/managed_object_storage_regions upcloud_managed_object_storage_regions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions(scope: Construct, id: string, config?: DataUpcloudManagedObjectStorageRegionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig">DataUpcloudManagedObjectStorageRegionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig">DataUpcloudManagedObjectStorageRegionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions">putRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRegions` <a name="putRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions"></a>

```typescript
public putRegions(value: IResolvable | DataUpcloudManagedObjectStorageRegionsRegions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]

---

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetRegions"></a>

```typescript
public resetRegions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedObjectStorageRegions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedObjectStorageRegions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedObjectStorageRegions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedObjectStorageRegions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/data-sources/managed_object_storage_regions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedObjectStorageRegions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regions">regions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList">DataUpcloudManagedObjectStorageRegionsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regionsInput">regionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regions"></a>

```typescript
public readonly regions: DataUpcloudManagedObjectStorageRegionsRegionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList">DataUpcloudManagedObjectStorageRegionsRegionsList</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regionsInput"></a>

```typescript
public readonly regionsInput: IResolvable | DataUpcloudManagedObjectStorageRegionsRegions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedObjectStorageRegionsConfig <a name="DataUpcloudManagedObjectStorageRegionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedObjectStorageRegionsConfig: dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.regions">regions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]</code> | regions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.regions"></a>

```typescript
public readonly regions: IResolvable | DataUpcloudManagedObjectStorageRegionsRegions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]

regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/data-sources/managed_object_storage_regions#regions DataUpcloudManagedObjectStorageRegions#regions}

---

### DataUpcloudManagedObjectStorageRegionsRegions <a name="DataUpcloudManagedObjectStorageRegionsRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions.Initializer"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedObjectStorageRegionsRegions: dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedObjectStorageRegionsRegionsList <a name="DataUpcloudManagedObjectStorageRegionsRegionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedObjectStorageRegionsRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedObjectStorageRegionsRegions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>[]

---


### DataUpcloudManagedObjectStorageRegionsRegionsOutputReference <a name="DataUpcloudManagedObjectStorageRegionsRegionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedObjectStorageRegions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.primaryZone">primaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryZone`<sup>Required</sup> <a name="primaryZone" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.primaryZone"></a>

```typescript
public readonly primaryZone: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedObjectStorageRegionsRegions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions">DataUpcloudManagedObjectStorageRegionsRegions</a>

---



